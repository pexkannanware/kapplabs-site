/**
 * Client-side interactions for the Aram ERP /mms marketing page.
 * Ported from KL- Mutt ERP/index.html <script>.
 */

type Cleanup = () => void;
type FrameLoadStatus = "loading" | "loaded" | "error";

function on(
  target: EventTarget | null | undefined,
  type: string,
  handler: EventListenerOrEventListenerObject,
  options?: boolean | AddEventListenerOptions
): Cleanup {
  if (!target) return () => undefined;
  target.addEventListener(type, handler, options);
  return () => target.removeEventListener(type, handler, options);
}

function q<T extends Element>(root: ParentNode, selector: string): T | null {
  return root.querySelector(selector) as T | null;
}

function qa<T extends Element>(root: ParentNode, selector: string): T[] {
  return Array.from(root.querySelectorAll(selector)) as T[];
}

export function initAramMms(root: HTMLElement): Cleanup {
  const cleanups: Cleanup[] = [];

  const heroFrameConfig = {
    folder: "/mms/merp-hero",
    frameCount: 120,
    filePrefix: "ezgif-frame-",
    padding: 3,
    extension: "jpg",
  };

  function getHeroFramePath(index: number) {
    const safeIndex = Math.max(1, Math.min(index, heroFrameConfig.frameCount));
    const padded = String(safeIndex).padStart(heroFrameConfig.padding, "0");
    return `${heroFrameConfig.folder}/${heroFrameConfig.filePrefix}${padded}.${heroFrameConfig.extension}`;
  }

  const introSection = q<HTMLElement>(root, "#intro");
  const heroPoster = q<HTMLImageElement>(root, "#hero-poster");
  const heroCanvas = q<HTMLCanvasElement>(root, "#hero-canvas");
  const introFallback = q<HTMLElement>(root, "#intro-fallback");
  const introBeatEls = qa<HTMLElement>(root, ".intro-beat");
  const introDotEls = qa<HTMLElement>(root, "#intro-progress span");
  const introCue = q<HTMLElement>(root, "#intro-cue");
  const nav = navigator as Navigator & {
    connection?: { saveData?: boolean };
    deviceMemory?: number;
  };
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  const deviceMemory = nav.deviceMemory ?? 0;
  const saveData = Boolean(nav.connection?.saveData);
  const lowCpu =
    navigator.hardwareConcurrency > 0 && navigator.hardwareConcurrency <= 4;
  const lowRam = deviceMemory > 0 && deviceMemory <= 4;
  const veryLowRam = deviceMemory > 0 && deviceMemory <= 2;
  const performanceMode = prefersReducedMotion || saveData || veryLowRam;
  const lowEndDevice = performanceMode || lowRam || lowCpu;
  const heroProfile = prefersReducedMotion
    ? {
        frameStep: heroFrameConfig.frameCount,
        initialPreloadCount: 0,
        preloadRadius: 0,
        maxConcurrentLoads: 1,
        preloadAll: false,
        staticFrame: true,
        ease: 1,
        maxFrameStep: 0,
      }
    : performanceMode
      ? {
          frameStep: 2,
          initialPreloadCount: 8,
          preloadRadius: 4,
          maxConcurrentLoads: 3,
          preloadAll: false,
          staticFrame: false,
          ease: 0.22,
          maxFrameStep: 3,
        }
      : lowRam || lowCpu
        ? {
            frameStep: 1,
            initialPreloadCount: 16,
            preloadRadius: 8,
            maxConcurrentLoads: 4,
            preloadAll: false,
            staticFrame: false,
            ease: 0.28,
            maxFrameStep: 4,
          }
        : {
            frameStep: 1,
            initialPreloadCount: 24,
            preloadRadius: 12,
            maxConcurrentLoads: 6,
            preloadAll: true,
            staticFrame: false,
            ease: 0.34,
            maxFrameStep: 6,
          };

  const frameStatus = new Map<number, FrameLoadStatus>();
  const frameImages = new Map<number, HTMLImageElement>();
  const pendingFrameLoads = new Map<number, HTMLImageElement>();
  const preloadQueue: number[] = [];
  let drawnFrame = 0;
  let visualFrame = 1;
  let targetFrame = 1;
  let currentBeat = 0;
  let heroRafId = 0;
  let heroAnimating = false;
  let canvasReady = false;

  const heroCtx = heroCanvas?.getContext("2d", { alpha: false }) ?? null;

  root.classList.toggle("performance-mode", lowEndDevice);

  function clampFrame(index: number) {
    return Math.max(1, Math.min(Math.round(index), heroFrameConfig.frameCount));
  }

  function snapFrame(index: number) {
    const safeIndex = clampFrame(index);
    if (safeIndex === heroFrameConfig.frameCount) return safeIndex;
    if (heroProfile.frameStep <= 1) return safeIndex;
    return clampFrame(
      Math.round((safeIndex - 1) / heroProfile.frameStep) *
        heroProfile.frameStep +
        1
    );
  }

  function resizeHeroCanvas() {
    if (!heroCanvas || !heroCtx) return;
    const rect = heroCanvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, lowEndDevice ? 1.5 : 2);
    const width = Math.max(1, Math.round(rect.width * dpr));
    const height = Math.max(1, Math.round(rect.height * dpr));
    if (heroCanvas.width !== width || heroCanvas.height !== height) {
      heroCanvas.width = width;
      heroCanvas.height = height;
      drawnFrame = 0;
    }
  }

  function drawCoverFrame(image: HTMLImageElement) {
    if (!heroCanvas || !heroCtx || !image.naturalWidth || !image.naturalHeight) {
      return false;
    }

    const canvasW = heroCanvas.width;
    const canvasH = heroCanvas.height;
    const imageRatio = image.naturalWidth / image.naturalHeight;
    const canvasRatio = canvasW / canvasH;
    let drawW = canvasW;
    let drawH = canvasH;
    let drawX = 0;
    let drawY = 0;

    if (imageRatio > canvasRatio) {
      drawH = canvasH;
      drawW = canvasH * imageRatio;
      drawX = (canvasW - drawW) / 2;
    } else {
      drawW = canvasW;
      drawH = canvasW / imageRatio;
      drawY = (canvasH - drawH) / 2;
    }

    heroCtx.fillStyle = "#120806";
    heroCtx.fillRect(0, 0, canvasW, canvasH);
    heroCtx.drawImage(image, drawX, drawY, drawW, drawH);
    return true;
  }

  function findNearestLoadedFrame(index: number) {
    const target = clampFrame(index);
    if (frameImages.has(target)) return target;

    const maxSearch = heroFrameConfig.frameCount;
    for (let distance = 1; distance < maxSearch; distance += 1) {
      const ahead = target + distance;
      if (ahead <= heroFrameConfig.frameCount && frameImages.has(ahead)) {
        return ahead;
      }
      const behind = target - distance;
      if (behind >= 1 && frameImages.has(behind)) {
        return behind;
      }
    }
    return 0;
  }

  function paintHeroFrame(index: number, force = false) {
    const nearest = findNearestLoadedFrame(index);
    if (!nearest) return false;
    if (!force && nearest === drawnFrame && canvasReady) return true;

    const image = frameImages.get(nearest);
    if (!image) return false;

    resizeHeroCanvas();
    if (!drawCoverFrame(image)) return false;

    drawnFrame = nearest;
    if (!canvasReady) {
      canvasReady = true;
      heroCanvas?.classList.add("is-ready");
      heroPoster?.classList.add("is-settled");
      introFallback?.classList.remove("is-active");
    }
    return true;
  }

  function updateIntroBeat(progress: number) {
    if (!introBeatEls.length) return;
    const beatIndex = Math.min(
      introBeatEls.length - 1,
      Math.floor(progress * introBeatEls.length)
    );
    if (beatIndex !== currentBeat) {
      introBeatEls[currentBeat].classList.remove("is-active");
      introBeatEls[beatIndex].classList.add("is-active");
      introDotEls[currentBeat]?.classList.remove("is-active");
      introDotEls[beatIndex]?.classList.add("is-active");
      currentBeat = beatIndex;
    }
    if (introCue) introCue.classList.toggle("is-hidden", beatIndex > 0);
  }

  function enqueueFrameLoad(index: number, priority = false) {
    const target = clampFrame(index);
    const status = frameStatus.get(target);
    if (status === "loaded" || status === "loading" || status === "error") return;
    if (preloadQueue.includes(target)) {
      if (priority) {
        const existing = preloadQueue.indexOf(target);
        if (existing > 0) {
          preloadQueue.splice(existing, 1);
          preloadQueue.unshift(target);
        }
      }
      return;
    }
    if (priority) preloadQueue.unshift(target);
    else preloadQueue.push(target);
  }

  function pumpPreloadQueue() {
    while (
      pendingFrameLoads.size < heroProfile.maxConcurrentLoads &&
      preloadQueue.length > 0
    ) {
      const target = preloadQueue.shift();
      if (target == null) break;
      const status = frameStatus.get(target);
      if (status === "loaded" || status === "loading" || status === "error") {
        continue;
      }

      frameStatus.set(target, "loading");
      const image = new Image();
      image.decoding = "async";
      pendingFrameLoads.set(target, image);
      image.onload = () => {
        pendingFrameLoads.delete(target);
        frameStatus.set(target, "loaded");
        frameImages.set(target, image);
        if (Math.abs(target - targetFrame) <= heroProfile.preloadRadius + 1) {
          ensureHeroAnimating();
        }
        pumpPreloadQueue();
      };
      image.onerror = () => {
        pendingFrameLoads.delete(target);
        frameStatus.set(target, "error");
        if (target === 1 && !canvasReady) {
          introFallback?.classList.add("is-active");
        }
        pumpPreloadQueue();
      };
      image.src = getHeroFramePath(target);
    }
  }

  function startFrameLoad(index: number, priority = false) {
    enqueueFrameLoad(index, priority);
    pumpPreloadQueue();
  }

  function preloadAround(frame: number) {
    startFrameLoad(frame, true);
    for (let offsetStep = 1; offsetStep <= heroProfile.preloadRadius; offsetStep += 1) {
      const offsetFrames = offsetStep * heroProfile.frameStep;
      startFrameLoad(frame + offsetFrames, offsetStep === 1);
      startFrameLoad(frame - offsetFrames, offsetStep === 1);
    }
  }

  function tickHero() {
    heroRafId = 0;
    const delta = targetFrame - visualFrame;
    const absDelta = Math.abs(delta);

    if (absDelta < 0.001) {
      visualFrame = targetFrame;
    } else {
      const easedStep = delta * heroProfile.ease;
      const cappedStep =
        Math.sign(easedStep) *
        Math.min(Math.abs(easedStep), Math.max(heroProfile.maxFrameStep, 0.001));
      visualFrame += cappedStep;
      if (Math.abs(targetFrame - visualFrame) < 0.01) {
        visualFrame = targetFrame;
      }
    }

    const paintIndex = snapFrame(visualFrame);
    paintHeroFrame(paintIndex);
    preloadAround(paintIndex);

    const needsCatchUp = visualFrame !== targetFrame;
    const waitingForFrame =
      !frameImages.has(paintIndex) &&
      (pendingFrameLoads.size > 0 || preloadQueue.length > 0);

    if (needsCatchUp || waitingForFrame) {
      heroRafId = window.requestAnimationFrame(tickHero);
      return;
    }
    heroAnimating = false;
  }

  function ensureHeroAnimating() {
    if (heroProfile.staticFrame || heroAnimating) return;
    heroAnimating = true;
    heroRafId = window.requestAnimationFrame(tickHero);
  }

  function updateIntroProgress() {
    if (!introSection) return;
    const rect = introSection.getBoundingClientRect();
    const offset = Math.max(0, -rect.top);
    const maxScroll = introSection.offsetHeight - window.innerHeight;
    const progress = Math.min(1, offset / Math.max(1, maxScroll));
    updateIntroBeat(progress);
    root.classList.toggle("intro-complete", progress >= 1);

    if (heroProfile.staticFrame) {
      paintHeroFrame(1, true);
      return;
    }

    targetFrame = snapFrame(
      Math.max(1, progress * (heroFrameConfig.frameCount - 1) + 1)
    );
    ensureHeroAnimating();
  }

  let scrollRafId = 0;
  function handleScroll() {
    if (scrollRafId) return;
    scrollRafId = window.requestAnimationFrame(() => {
      scrollRafId = 0;
      updateIntroProgress();
    });
  }

  cleanups.push(on(window, "scroll", handleScroll, { passive: true }));
  cleanups.push(on(window, "resize", () => {
    resizeHeroCanvas();
    paintHeroFrame(drawnFrame || targetFrame, true);
  }));
  cleanups.push(() => {
    if (scrollRafId) window.cancelAnimationFrame(scrollRafId);
    if (heroRafId) window.cancelAnimationFrame(heroRafId);
  });

  if (heroPoster?.complete && heroPoster.naturalWidth > 0) {
    frameStatus.set(1, "loaded");
    frameImages.set(1, heroPoster);
    paintHeroFrame(1, true);
  } else if (heroPoster?.getAttribute("src")) {
    frameStatus.set(1, "loading");
    cleanups.push(
      on(
        heroPoster,
        "load",
        () => {
          frameStatus.set(1, "loaded");
          frameImages.set(1, heroPoster);
          paintHeroFrame(1, true);
          introFallback?.classList.remove("is-active");
        },
        { once: true }
      )
    );
    cleanups.push(
      on(
        heroPoster,
        "error",
        () => {
          frameStatus.set(1, "error");
          introFallback?.classList.add("is-active");
        },
        { once: true }
      )
    );
  }

  const onLoad = () => {
    for (
      let preloadIndex = 1;
      preloadIndex <= heroProfile.initialPreloadCount;
      preloadIndex += 1
    ) {
      startFrameLoad(1 + preloadIndex * heroProfile.frameStep, true);
    }
    if (heroProfile.preloadAll) {
      for (let index = 1; index <= heroFrameConfig.frameCount; index += 1) {
        startFrameLoad(index);
      }
    }
    updateIntroProgress();
  };
  if (document.readyState === "complete") {
    onLoad();
  } else {
    cleanups.push(on(window, "load", onLoad));
    onLoad();
  }

  qa<HTMLAnchorElement>(root, "[data-scroll]").forEach((link) => {
    cleanups.push(
      on(link, "click", (event) => {
        const targetId = link.getAttribute("href");
        if (!targetId || !targetId.startsWith("#")) return;
        event.preventDefault();
        const target = q<HTMLElement>(root, targetId);
        if (target) {
          const top = target.getBoundingClientRect().top + window.scrollY - 70;
          window.scrollTo({ top, behavior: "smooth" });
        }
        const menu = q<HTMLElement>(root, "#site-menu");
        if (menu?.classList.contains("is-open")) {
          menu.classList.remove("is-open");
          const toggle = q<HTMLElement>(root, ".menu-toggle");
          toggle?.setAttribute("aria-expanded", "false");
        }
      })
    );
  });

  const menuToggle = q<HTMLElement>(root, ".menu-toggle");
  const siteMenu = q<HTMLElement>(root, "#site-menu");
  if (menuToggle && siteMenu) {
    cleanups.push(
      on(menuToggle, "click", () => {
        const isOpen = siteMenu.classList.toggle("is-open");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
      })
    );
  }

  const revealItems = qa<HTMLElement>(root, ".reveal");
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );
  revealItems.forEach((item) => revealObserver.observe(item));
  // Ensure already-visible items reveal even if the observer callback is delayed
  const revealInView = () => {
    revealItems.forEach((item) => {
      if (item.classList.contains("is-visible")) return;
      const rect = item.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top < vh * 0.92 && rect.bottom > vh * 0.08) {
        item.classList.add("is-visible");
        revealObserver.unobserve(item);
      }
    });
  };
  revealInView();
  let revealRafId = 0;
  function scheduleRevealInView() {
    if (revealRafId) return;
    revealRafId = window.requestAnimationFrame(() => {
      revealRafId = 0;
      revealInView();
    });
  }
  cleanups.push(on(window, "scroll", scheduleRevealInView, { passive: true }));
  cleanups.push(on(window, "resize", scheduleRevealInView));
  cleanups.push(() => revealObserver.disconnect());
  cleanups.push(() => {
    if (revealRafId) window.cancelAnimationFrame(revealRafId);
  });

  const flowSection = q<HTMLElement>(root, ".mutt-flow-section");
  const flowCards = flowSection
    ? qa<HTMLElement>(flowSection, ".mutt-flow-card")
    : [];
  const flowDriftSpeeds = [0, 22, 40, 60];
  const flowCurrent = flowCards.map(() => 0);
  const flowTarget = flowCards.map(() => 0);
  const flowEase = 0.07;
  let flowAnimating = false;
  let flowRafId = 0;

  function updateFlowTargets() {
    if (!flowSection || !flowCards.length) return;
    if (window.innerWidth <= 900) {
      flowTarget.fill(0);
      return;
    }
    const rect = flowSection.getBoundingClientRect();
    const center = rect.top + rect.height / 2 - window.innerHeight / 2;
    const progress = Math.max(
      -1,
      Math.min(1, center / (window.innerHeight / 2))
    );
    flowCards.forEach((_card, index) => {
      flowTarget[index] = progress * -flowDriftSpeeds[index];
    });
  }

  function tickFlowParallax() {
    let settled = true;
    flowCards.forEach((card, index) => {
      const diff = flowTarget[index] - flowCurrent[index];
      if (Math.abs(diff) > 0.05) settled = false;
      flowCurrent[index] += diff * flowEase;
      card.style.setProperty("--drift-x", `${flowCurrent[index].toFixed(2)}px`);
    });
    if (!settled) window.requestAnimationFrame(tickFlowParallax);
    else flowAnimating = false;
  }

  function handleFlowScroll() {
    if (lowEndDevice) return;
    if (flowRafId) return;
    flowRafId = window.requestAnimationFrame(() => {
      flowRafId = 0;
      updateFlowTargets();
      if (!flowAnimating) {
        flowAnimating = true;
        window.requestAnimationFrame(tickFlowParallax);
      }
    });
  }

  if (flowSection) {
    if (lowEndDevice) {
      flowCards.forEach((card) => card.style.setProperty("--drift-x", "0px"));
    } else {
      cleanups.push(on(window, "scroll", handleFlowScroll, { passive: true }));
      cleanups.push(on(window, "resize", handleFlowScroll));
      handleFlowScroll();
    }
    cleanups.push(() => {
      if (flowRafId) window.cancelAnimationFrame(flowRafId);
    });
  }

  const statCounts = qa<HTMLElement>(root, ".stat-count");
  const statObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target as HTMLElement;
        const target = parseInt(el.dataset.target || "0", 10) || 0;
        const duration = 1200;
        const start = performance.now();
        function step(now: number) {
          const progress = Math.min(1, (now - start) / duration);
          el.textContent = String(Math.round(progress * target));
          if (progress < 1) window.requestAnimationFrame(step);
        }
        window.requestAnimationFrame(step);
        statObserver.unobserve(el);
      });
    },
    { threshold: 0.4 }
  );
  statCounts.forEach((el) => statObserver.observe(el));
  cleanups.push(() => statObserver.disconnect());

  const contactForm = q<HTMLFormElement>(root, "#contact-form");
  const formSuccess = q<HTMLElement>(root, "#form-success");
  if (contactForm) {
    cleanups.push(
      on(contactForm, "submit", (event) => {
        event.preventDefault();
        if (!contactForm.checkValidity()) {
          contactForm.reportValidity();
          return;
        }

        const formData = new FormData(contactForm);
        const name = String(formData.get("name") || "").trim();
        const mutt = String(formData.get("mutt") || "").trim();
        const email = String(formData.get("email") || "").trim();
        const phone = String(formData.get("phone") || "").trim();
        const message = String(formData.get("message") || "").trim();
        const subject = encodeURIComponent("Aram ERP — Demo request");
        const bodyText = [
          `Name: ${name}`,
          `Mutt / Institution: ${mutt || "Not provided"}`,
          `Email: ${email}`,
          `Phone: ${phone || "Not provided"}`,
          "",
          "Current needs:",
          message,
        ].join("\n");

        contactForm.classList.add("is-submitted");
        formSuccess?.classList.add("is-shown");
        window.location.href = `mailto:kapplabs@kannanware.com?subject=${subject}&body=${encodeURIComponent(bodyText)}`;
      })
    );
  }

  // Manuscript carousel
  const book = q<HTMLElement>(root, "#manuscript-book");
  if (book) {
    const pages = qa<HTMLElement>(book, ".palm-leaf");
    const total = pages.length;
    const currentEl = q<HTMLElement>(root, "#manuscript-current");
    const totalEl = q<HTMLElement>(root, "#manuscript-total");
    const prevBtn = q<HTMLElement>(root, ".manuscript-prev");
    const nextBtn = q<HTMLElement>(root, ".manuscript-next");
    const beads = qa<HTMLElement>(root, ".manuscript-bead");
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const mobileManuscript = window.matchMedia("(max-width: 640px)");

    let index = 0;
    let touchStartX = 0;
    let touchDeltaX = 0;
    let touching = false;
    let suppressClick = false;

    if (totalEl) totalEl.textContent = String(total);

    function render() {
      const isMobile = mobileManuscript.matches;
      pages.forEach((page, i) => {
        const offset = i - index;
        let transform: string;
        let opacity: number;
        let z: number;

        if (isMobile && offset === 0) {
          transform = "rotateY(0deg) translateX(0) translateZ(0)";
          opacity = 1;
          z = 20;
        } else if (isMobile && offset < 0) {
          transform = "rotateY(-152deg) translateX(-3%) translateZ(-35px)";
          opacity = 1;
          z = offset === -1 ? 21 : 4;
        } else if (isMobile) {
          const capped = Math.min(offset, 3);
          transform = `translate(${capped * 5}px, ${capped * 7}px) rotate(${capped * 0.35}deg) scale(${1 - capped * 0.012})`;
          opacity = capped <= 2 ? 1 : 0;
          z = 20 - capped;
        } else if (offset === 0) {
          transform = "rotateY(0deg) translateX(0) translateZ(0)";
          opacity = 1;
          z = 20;
        } else if (offset < 0) {
          transform = "rotateY(-120deg) translateX(-8%) translateZ(-60px)";
          opacity = 1;
          z = offset === -1 ? 21 : 4;
        } else {
          const capped = Math.min(offset, 4);
          transform = `translate(${capped * 10}px, ${capped * 13}px) rotate(${capped * 0.6}deg) scale(${1 - capped * 0.012})`;
          opacity = capped <= 3 ? 1 : 0;
          z = 20 - capped;
        }

        page.style.transform = transform;
        page.style.opacity = String(opacity);
        page.style.zIndex = String(z);
        page.classList.toggle("is-current", offset === 0);
        page.setAttribute("aria-hidden", offset === 0 ? "false" : "true");
      });

      if (currentEl) currentEl.textContent = String(index + 1);
      beads.forEach((bead, i) => {
        const active = i === index;
        bead.classList.toggle("is-active", active);
        bead.setAttribute("aria-selected", String(active));
      });
    }

    function goTo(target: number) {
      index = (target + total) % total;
      render();
    }
    function next() {
      goTo(index + 1);
    }
    function prev() {
      goTo(index - 1);
    }

    if (prevBtn) cleanups.push(on(prevBtn, "click", prev));
    if (nextBtn) cleanups.push(on(nextBtn, "click", next));
    beads.forEach((bead, i) =>
      cleanups.push(on(bead, "click", () => goTo(i)))
    );

    pages.forEach((page, i) => {
      cleanups.push(
        on(page, "click", () => {
          if (suppressClick) return;
          if (i > index) goTo(i);
        })
      );
    });

    function dragStart(clientX: number) {
      touching = true;
      touchStartX = clientX;
      touchDeltaX = 0;
      if (!reduceMotion) pages[index].style.transition = "none";
    }
    function dragMove(clientX: number) {
      if (!touching) return;
      touchDeltaX = clientX - touchStartX;
      if (reduceMotion) return;
      if (mobileManuscript.matches) {
        const rotate = Math.max(-78, Math.min(14, touchDeltaX / 3.2));
        pages[index].style.transform = `rotateY(${rotate}deg) translateX(${touchDeltaX * 0.08}px)`;
      } else {
        const rotate = Math.max(-45, Math.min(45, touchDeltaX / 5));
        pages[index].style.transform = `rotateY(${rotate}deg) translateX(${touchDeltaX * 0.3}px)`;
      }
    }
    function dragEnd() {
      if (!touching) return;
      touching = false;
      pages[index].style.transition = "";
      if (Math.abs(touchDeltaX) > 50) {
        suppressClick = true;
        if (touchDeltaX < 0) next();
        else prev();
        window.setTimeout(() => {
          suppressClick = false;
        }, 300);
      } else {
        render();
      }
      touchDeltaX = 0;
    }

    cleanups.push(
      on(
        book,
        "touchstart",
        ((event: TouchEvent) => dragStart(event.touches[0].clientX)) as EventListener,
        { passive: true }
      )
    );
    cleanups.push(
      on(
        book,
        "touchmove",
        ((event: TouchEvent) => dragMove(event.touches[0].clientX)) as EventListener,
        { passive: true }
      )
    );
    cleanups.push(on(book, "touchend", dragEnd));

    cleanups.push(
      on(book, "mousedown", ((event: MouseEvent) => {
        event.preventDefault();
        dragStart(event.clientX);
      }) as EventListener)
    );
    cleanups.push(
      on(window, "mousemove", ((event: MouseEvent) =>
        dragMove(event.clientX)) as EventListener)
    );
    cleanups.push(on(window, "mouseup", dragEnd));

    book.setAttribute("tabIndex", "0");
    cleanups.push(
      on(book, "keydown", ((event: KeyboardEvent) => {
        if (event.key === "ArrowRight") {
          event.preventDefault();
          next();
        }
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          prev();
        }
      }) as EventListener)
    );

    cleanups.push(
      on(mobileManuscript as unknown as EventTarget, "change", render as EventListener)
    );

    render();
  }

  return () => {
    cleanups.forEach((fn) => fn());
    root.classList.remove("intro-complete");
  };
}
