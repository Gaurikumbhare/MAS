import styles from './OurWork.module.css';

const programs = [
  { id: 1, title: 'Mother & Toddler Program', icon: '👶', color: 'var(--accent-red)' },
  { id: 2, title: 'Kindergarten', icon: '🎓', color: 'var(--accent-orange)' },
  { id: 3, title: 'Daycare', icon: '🏡', color: 'var(--accent-green)' },
  { id: 4, title: 'Life Skills Development', icon: '🧠', color: 'var(--accent-blue)' },
  { id: 5, title: 'Counselling Support', icon: '💜', color: 'var(--primary)' },
];

export default function OurWork() {
  return (
    <section id="programs" className={`section ${styles.programs}`}>
      {/* Background Decorative Elements */}
      <div className={`${styles.bgElement} ${styles.plane}`}>
        <svg width="150" height="100" viewBox="0 0 150 100" fill="none" stroke="var(--primary-light)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {/* Dashed trail */}
          <path d="M10,90 C30,120 70,110 80,70 C85,50 60,30 40,50 C20,70 50,90 100,50" strokeDasharray="4,6" opacity="0.6"/>
          {/* Paper Plane */}
          <path d="M140 20L80 70L85 45L140 20Z" fill="var(--primary-light)" fillOpacity="0.1"/>
          <path d="M140 20L95 80L80 70M140 20L50 50L80 70M85 45L110 35"/>
        </svg>
      </div>
      <div className={`${styles.bgElement} ${styles.heart}`}>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--accent-red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
      </div>
      <div className={`${styles.bgElement} ${styles.star}`}>
        <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      </div>

      <div className={`container ${styles.contentWrapper}`}>
        <div className={styles.header}>
          <div className={styles.titleWrapper}>
            <span className={styles.decoration}>✨</span>
            <h2 className="font-handwriting">Programmes</h2>
            <span className={styles.decoration}>✨</span>
          </div>
        </div>
        
        <div className={styles.programsGrid}>
          <div className={styles.programCard}>
            <div className={styles.imageWrapper}>
              <img src="/hero-kid.png" alt="Mother & Toddler" />
              <div className={styles.scallopMask}></div>
            </div>
            <div className={styles.cardBody}>
              <div className={styles.badgeIcon}>👶</div>
              <h3>Mother & Toddler</h3>
              <p>A thoughtfully designed program where parents and toddlers learn, play, explore, and bond together through music, movement, storytelling, and sensory activities.</p>
              
              <div className={styles.cardFooter}>
                <div className={styles.footerCol}>
                  <span className={styles.footerLabel}>Admission Age Group</span>
                  <span className={styles.footerValue}>6 Months – 3 Years</span>
                </div>
                <div className={styles.footerCol}>
                  <span className={styles.footerLabel}>Duration</span>
                  <span className={styles.footerValue}>2 Hours/Day</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.programCard}>
            <div className={styles.imageWrapper}>
              <img src="/image.png" alt="Kindergarten / Preschool" />
              <div className={styles.scallopMask}></div>
            </div>
            <div className={styles.cardBody}>
              <div className={styles.badgeIcon}>🎓</div>
              <h3>Kindergarten / Preschool</h3>
              <p>A child-centred learning environment that encourages curiosity, independence, communication, creativity, and essential early-life skills through activity-based learning.</p>
              
              <div className={styles.cardFooter}>
                <div className={styles.footerCol}>
                  <span className={styles.footerLabel}>Admission Age Group</span>
                  <span className={styles.footerValue}>2 – 6 Years</span>
                </div>
                <div className={styles.footerCol}>
                  <span className={styles.footerLabel}>Duration</span>
                  <span className={styles.footerValue}>4 Hours/Day</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.programCard}>
            <div className={styles.imageWrapper}>
              <img src="/climbing.png" alt="Daycare" />
              <div className={styles.scallopMask}></div>
            </div>
            <div className={styles.cardBody}>
              <div className={styles.badgeIcon}>🏡</div>
              <h3>Daycare</h3>
              <p>A safe, caring, and engaging environment where children can spend their day learning, playing, socialising, and participating in meaningful activities.</p>
              
              <div className={styles.cardFooter}>
                <div className={styles.footerCol}>
                  <span className={styles.footerLabel}>Admission Age Group</span>
                  <span className={styles.footerValue}>All Ages</span>
                </div>
                <div className={styles.footerCol}>
                  <span className={styles.footerLabel}>Duration</span>
                  <span className={styles.footerValue}>All Day</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
