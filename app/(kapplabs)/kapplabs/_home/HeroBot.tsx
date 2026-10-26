"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Sparkles } from "lucide-react";

import styles from "./Home.module.css";

const LINES = [
  "Hi there! I'm the Kapplabs AI. Go on, move your cursor.",
  "We build SaaS products with AI inside, not bolted on.",
  "AI agents, automation, analytics. Tell me what slows you down.",
  "Like what you see? Book a call and meet the humans behind me.",
] as const;

/* Stacked slabs behind the head and body give them real thickness when they turn. */
const HEAD_DEPTH = Array.from({ length: 12 }, (_, i) => i + 1);
const BODY_DEPTH = Array.from({ length: 9 }, (_, i) => i + 1);

const ORBIT = ["AI agents", "SaaS platforms", "Automation", "Analytics", "Integrations", "Custom apps"] as const;

/* Types `text` out character by character after a short "thinking" pause. */
function useTypewriter(text: string) {
  const [shown, setShown] = useState("");
  const [thinking, setThinking] = useState(true);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setThinking(false);
      setShown(text);
      return;
    }
    setShown("");
    setThinking(true);
    let i = 0;
    let typer = 0;
    const start = window.setTimeout(() => {
      setThinking(false);
      typer = window.setInterval(() => {
        i += 1;
        setShown(text.slice(0, i));
        if (i >= text.length) window.clearInterval(typer);
      }, 22);
    }, 650);
    return () => {
      window.clearTimeout(start);
      window.clearInterval(typer);
    };
  }, [text]);

  return { shown, thinking, done: !thinking && shown.length === text.length };
}

/* A friendly bot whose head, body and eyes track the cursor. Click it to say hi. */
export default function HeroBot() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [line, setLine] = useState(0);
  const [blink, setBlink] = useState(false);
  const [happy, setHappy] = useState(false);
  const [waves, setWaves] = useState(0);
  const { shown, thinking, done } = useTypewriter(LINES[line]);

  // -1..1 offsets of the cursor relative to the bot's centre.
  const dx = useMotionValue(0);
  const dy = useMotionValue(0);
  const near = useMotionValue(0);
  const sx = useSpring(dx, { stiffness: 120, damping: 16 });
  const sy = useSpring(dy, { stiffness: 120, damping: 16 });
  const sNear = useSpring(near, { stiffness: 80, damping: 20 });

  const headX = useTransform(sx, [-1, 1], [-16, 16]);
  const headY = useTransform(sy, [-1, 1], [-8, 10]);
  const headRotY = useTransform(sx, [-1, 1], [-30, 30]);
  const headRotX = useTransform(sy, [-1, 1], [16, -16]);
  const bodyRotY = useTransform(sx, [-1, 1], [-14, 14]);
  const sheenX = useTransform(sx, [-1, 1], [40, -40]);
  const sheenY = useTransform(sy, [-1, 1], [24, -24]);
  const bodyX = useTransform(sx, [-1, 1], [-6, 6]);
  const pupilX = useTransform(sx, [-1, 1], [-8, 8]);
  const pupilY = useTransform(sy, [-1, 1], [-6, 6]);
  const glareX = useTransform(sx, [-1, 1], [18, -18]);
  const glow = useTransform(sNear, [0, 1], [0.35, 1]);
  const coreScale = useTransform(sNear, [0, 1], [0.85, 1.15]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onMove = (event: PointerEvent) => {
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height * 0.45;
      dx.set(Math.max(-1, Math.min(1, (event.clientX - cx) / (window.innerWidth / 2))));
      dy.set(Math.max(-1, Math.min(1, (event.clientY - cy) / (window.innerHeight / 2))));
      near.set(Math.max(0, 1 - Math.hypot(event.clientX - cx, event.clientY - cy) / 520));
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [dx, dy, near]);

  // Blink every few seconds.
  useEffect(() => {
    let timer = 0;
    const schedule = () => {
      timer = window.setTimeout(() => {
        setBlink(true);
        window.setTimeout(() => setBlink(false), 130);
        schedule();
      }, 2400 + Math.random() * 2800);
    };
    schedule();
    return () => window.clearTimeout(timer);
  }, []);

  const sayHi = () => {
    setLine((l) => (l + 1) % LINES.length);
    setHappy(true);
    setWaves((w) => w + 1);
    window.setTimeout(() => setHappy(false), 1400);
  };

  return (
    <div ref={ref} className={styles.botStage}>
      <motion.div className={styles.botHalo} style={{ opacity: glow }} aria-hidden="true" />

      <div className={styles.orbit} aria-hidden="true">
        {ORBIT.map((label, i) => (
          <span key={label} className={styles.orbitItem} style={{ "--i": i, "--n": ORBIT.length } as React.CSSProperties}>
            <em>{label}</em>
          </span>
        ))}
      </div>

      <div className={styles.chat} aria-live="polite">
        <div className={styles.chatHead}>
          <span className={styles.chatAvatar}>
            <Sparkles size={12} />
          </span>
          <strong>Kapplabs AI</strong>
          <span className={styles.chatStatus}>
            <i aria-hidden="true" />
            Online
          </span>
        </div>
        <p className={styles.chatText}>
          {thinking ? (
            <span className={styles.typing} aria-label="Typing">
              <i />
              <i />
              <i />
            </span>
          ) : (
            <>
              {shown}
              {!done && <span className={styles.caret} aria-hidden="true" />}
            </>
          )}
        </p>
      </div>

      <motion.div
        className={styles.botFloat}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <button type="button" className={styles.bot} onClick={sayHi} aria-label="Say hi to the Kapplabs AI bot">
          <motion.span className={styles.botHeadWrap} style={{ x: headX, y: headY, rotateX: headRotX, rotateY: headRotY }}>
            <span className={styles.botAntenna} aria-hidden="true">
              <i />
            </span>
            <span className={styles.botHead}>
              {HEAD_DEPTH.map((i) => (
                <span
                  key={i}
                  className={styles.botSlab}
                  style={{ transform: `translateZ(${-i * 2.2}px)`, filter: `brightness(${1 - i * 0.035})` }}
                  aria-hidden="true"
                />
              ))}
              <span className={styles.botEar} data-side="l" aria-hidden="true" />
              <span className={styles.botEar} data-side="r" aria-hidden="true" />
              <motion.span className={styles.botSheen} style={{ x: sheenX, y: sheenY }} aria-hidden="true" />
              <span className={styles.botVisor}>
                <span className={styles.botScan} aria-hidden="true" />
                <motion.span className={styles.botGlare} style={{ x: glareX }} aria-hidden="true" />
                <span className={styles.botCheek} data-side="l" aria-hidden="true" />
                <span className={styles.botCheek} data-side="r" aria-hidden="true" />
              </span>
              <span className={styles.botFace} aria-hidden="true">
                <span className={styles.botEyes}>
                  {[0, 1].map((eye) =>
                    happy ? (
                      <span key={eye} className={styles.botEyeHappy} />
                    ) : (
                      <span key={eye} className={styles.botEye} data-blink={blink}>
                        <motion.i style={{ x: pupilX, y: pupilY }} />
                      </span>
                    ),
                  )}
                </span>
                <span className={`${styles.botMouth} ${happy ? styles.botMouthHappy : ""}`} />
              </span>
            </span>
          </motion.span>

          <motion.span className={styles.botBody} style={{ x: bodyX, rotateY: bodyRotY }} aria-hidden="true">
            <motion.span
              key={`l${waves}`}
              className={styles.botArm}
              data-side="l"
              initial={{ rotate: 12 }}
              animate={{ rotate: 12 }}
            />
            <motion.span
              key={`r${waves}`}
              className={styles.botArm}
              data-side="r"
              initial={{ rotate: -12 }}
              animate={waves ? { rotate: [-12, -150, -110, -150, -110, -12] } : { rotate: -12 }}
              transition={{ duration: 1.3, ease: "easeInOut" }}
            />
            {BODY_DEPTH.map((i) => (
              <span
                key={i}
                className={styles.botBodySlab}
                style={{ transform: `translateZ(${-i * 2.4}px)`, filter: `brightness(${1 - i * 0.04})` }}
              />
            ))}
            <span className={styles.botChest}>
              <motion.span className={styles.botCore} style={{ scale: coreScale }} />
            </span>
          </motion.span>
        </button>
      </motion.div>

      <motion.span
        className={styles.botShadow}
        animate={{ scaleX: [1, 0.82, 1], opacity: [0.5, 0.32, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />

      <button type="button" className={styles.botHint} onClick={sayHi}>
        Say hi 👋
      </button>
    </div>
  );
}
