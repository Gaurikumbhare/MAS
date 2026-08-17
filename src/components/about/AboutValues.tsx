import styles from './AboutValues.module.css';

export default function AboutValues() {
  return (
    <section className={styles.valuesSection}>
      <div className="container">
        <div className={styles.grid}>
          {/* Vision Card */}
          <div className={`${styles.card} ${styles.cardVision}`}>
            <h2 className={styles.titleVision}>Vision</h2>
            <p className={styles.text}>
              To enable, energize, enhance childhood by fostering growth of mind, body & spirit
              which will enable them to become lifelong learners & leaders of tomorrow
              with strong values & skills.
            </p>
          </div>

          {/* Mission Card */}
          <div className={`${styles.card} ${styles.cardMission}`}>
            <h2 className={styles.titleMission}>Mission</h2>
            <p className={styles.text}>
              To nurture young minds in a culturally appropriate environment & provide
              opportunities that will help them realize their true potential.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
