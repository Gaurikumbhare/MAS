import styles from './Introduction.module.css';

export default function Introduction() {
  return (
    <section id="about" className={styles.introSection}>
      <img src="/sticker-star.png" alt="Star Doodle" className="sticker sticker-delay-1" style={{ top: '5%', left: '15%', width: '100px' }} />
      <div className={styles.backgroundGlows}>
        <div className={styles.glowLeft}></div>
        <div className={styles.glowRight}></div>
      </div>
      <div className={`container ${styles.container}`}>
        <h2 className={`font-handwriting ${styles.title}`}>
          ✨ About Miles Along Smiles ✨
        </h2>
        
        <p className={styles.paragraph}>
          Miles Along Smiles is a nurturing early-learning center dedicated to making a child's early years joyful,
          meaningful and full of discovery. We believe in a happy, safe and enriching environment where every child
          learns, grows and shines.
        </p>
        
        <p className={styles.paragraph}>
          Our approach focuses on building strong values, age-appropriate learning, creativity, and emotional well-
          being — laying a strong foundation for a lifelong journey.
        </p>

        <div className={styles.pillsContainer}>
          <div className={styles.pill}>
            <div className={`${styles.iconCircle} ${styles.iconBlue}`}>
              <span className={styles.icon}>📖</span>
            </div>
            <span className={styles.pillText}>Learning through Play</span>
          </div>
          
          <div className={styles.pill}>
            <div className={`${styles.iconCircle} ${styles.iconPink}`}>
              <span className={styles.icon}>❤️</span>
            </div>
            <span className={styles.pillText}>Caring & Problem<br/>Solving</span>
          </div>

          <div className={styles.pill}>
            <div className={`${styles.iconCircle} ${styles.iconYellow}`}>
              <span className={styles.icon}>⭐</span>
            </div>
            <span className={styles.pillText}>Confidence &<br/>Independence</span>
          </div>
        </div>
      </div>
    </section>
  );
}
