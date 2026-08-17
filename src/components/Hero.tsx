import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.blobPink}>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#f3e5f5" d="M38.1,-58.6C48.6,-50.5,55.8,-37.9,61.2,-24.5C66.6,-11.1,70.2,3.1,65.6,14.6C60.9,26.1,48.1,34.8,36,44.7C23.9,54.7,12,65.8,-2.6,69.3C-17.1,72.7,-34.3,68.5,-45.3,57.7C-56.3,47,-61.2,29.6,-64.1,12.7C-66.9,-4.3,-67.7,-20.9,-60.1,-33.6C-52.6,-46.3,-36.8,-55.1,-22.3,-60.3C-7.8,-65.4,5.4,-66.8,17.2,-63.3C29,-59.8,38.1,-58.6,38.1,-58.6Z" transform="translate(100 100) scale(1.1)" />
        </svg>
      </div>

      <div className="container">
        <div className={styles.content}>
          <div className={`${styles.handwriting} font-handwriting`}>Nurturing Little Minds</div>
          <h1 className={styles.title}>Building Bright Futures</h1>
          
          <div className={styles.badge}>
            <h2>ADMISSIONS<br/>OPEN</h2>
            <span>2026-27</span>
          </div>

          <p className={styles.subtitle}>
            A joyful start for a lifetime of success.
          </p>
          
          <div className={styles.actions}>
            <button className="btn btn-primary">Schedule a School Visit</button>
            <button className="btn btn-secondary">Contact Us</button>
          </div>
        </div>
      </div>
    </section>
  );
}
