import styles from "./Home.module.css";

type BrowserFrameProps = {
  src: string;
  alt: string;
  address?: string;
  priority?: boolean;
  className?: string;
};

export default function BrowserFrame({ src, alt, address, priority = false, className }: BrowserFrameProps) {
  return (
    <figure className={`${styles.frame} ${className ?? ""}`}>
      <div className={styles.frameBar} aria-hidden="true">
        <span className={styles.frameDots}>
          <i />
          <i />
          <i />
        </span>
        {address && <span className={styles.frameAddress}>{address}</span>}
      </div>
      <img src={src} alt={alt} loading={priority ? "eager" : "lazy"} decoding="async" />
    </figure>
  );
}
