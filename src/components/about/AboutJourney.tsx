import styles from './AboutJourney.module.css';

export default function AboutJourney() {
  return (
    <section className={styles.journeySection}>
      <div className="container">
        <div className={styles.flexContainer}>
          
          {/* Left Side */}
          <div className={styles.leftColumn}>
            <div className={styles.titleWrapper}>
              <div className={styles.beeIcon}>🐝</div>
              <h2 className={styles.title}>Our Journey</h2>
            </div>
            
            <div className={styles.giraffeWrapper}>
              {/* Using a placeholder for giraffe */}
              <img src="https://images.unsplash.com/photo-1547149617-609fafa00a64?auto=format&fit=crop&w=400&q=80" alt="Giraffe" className={styles.giraffeImage} />
            </div>

            <div className={styles.yearBox}>
              <div className={styles.yearNumber}>2022</div>
              <div className={styles.yearText}>
                Schools reopened<br />
                with Safety<br />
                Protocols
              </div>
            </div>
          </div>

          {/* Right Side - Radial Timeline */}
          <div className={styles.rightColumn}>
            <div className={styles.radialContainer}>
              <div className={styles.centerDot}></div>
              
              <div className={`${styles.line} ${styles.line1}`}>
                <span className={styles.lineText}>2023</span>
              </div>
              
              <div className={`${styles.line} ${styles.line2} ${styles.activeLine}`}>
                <span className={styles.lineTextActive}>2022</span>
              </div>
              
              <div className={`${styles.line} ${styles.line3}`}>
                <span className={styles.lineText}>2021</span>
              </div>
              
              <div className={`${styles.line} ${styles.line4}`}>
                <span className={styles.lineText}>2020</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
