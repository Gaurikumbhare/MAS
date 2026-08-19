import styles from './Testimonials.module.css';

const reviews = [
  { id: 1, text: "I am very happy with the School. Teachers & Admin & Didis. I feel very comfortable dropping Siddu for the whole day. Overall very happy with his growth. Thank you", author: "Dr. Shilpa Chokhandre, Parent", colorClass: styles.purpleCard, avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80" },
  { id: 2, text: "Everything is just perfect here. Exactly how I imagined my babys preschool should be. The teachers here are excellent. Keep up the good work.", author: "Dr. Akansha Barik, Parent", colorClass: styles.yellowCard, avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80" },
  { id: 3, text: "Our experience is absolutely amazing coming from a different culture we have come to realise our son is settling in as if he always belongs here. Home away from home is what we feel for the school. Thanks a million for caring after our little one!", author: "Mrs. Alpa Agrawal, Parent", colorClass: styles.greenCard, avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80" },
  { id: 4, text: "I appreciate the school's efforts towards my child. Very happy with the overall progress of my child", author: "Dr. Sweety Dande, Parent", colorClass: styles.pinkCard, avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80" },
  { id: 5, text: "We are satisfied with the progress & efforts of the school Activities & Management. - Thank you", author: "Mrs. Abhaya Shende, Parent", colorClass: styles.blueCard, avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80" }
];

export default function Testimonials() {
  return (
    <section className={`section ${styles.testimonials}`}>
      {/* Background Decorations */}
      <div className={styles.blobPurple}></div>
      <div className={styles.blobGreen}></div>
      <div className={styles.blobYellow}></div>
      <div className={styles.blobPink}></div>
      
      <div className={styles.decorHeartLeft}>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ff80ab" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
      </div>
      <div className={styles.decorStar}>
        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#FFC107" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      </div>
      <div className={styles.decorHeartRight}>
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#ff80ab" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 10, maxWidth: '1200px' }}>
        <div className={styles.header}>
          <div className={styles.titleWrapper}>
            {/* Sunburst decorations */}
            <div className={styles.sunburstLeft}>
              <svg width="30" height="40" viewBox="0 0 30 40" fill="none" stroke="var(--secondary)" strokeWidth="3" strokeLinecap="round">
                <path d="M5,10 L15,20 M2,25 L15,25 M5,40 L15,30"/>
              </svg>
            </div>
            
            <div className={styles.titleContent}>
              <h2 className="font-handwriting">What Parents Say</h2>
              <svg className={styles.titleUnderline} viewBox="0 0 200 20" preserveAspectRatio="none">
                <path d="M5,15 Q 100,5 195,15" fill="none" stroke="#FFC107" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </div>
            
            <div className={styles.sunburstRight}>
              <svg width="30" height="40" viewBox="0 0 30 40" fill="none" stroke="var(--secondary)" strokeWidth="3" strokeLinecap="round">
                <path d="M25,10 L15,20 M28,25 L15,25 M25,40 L15,30"/>
              </svg>
            </div>
          </div>
        </div>
        
        <div className={styles.marqueeContainer}>
          <div className={styles.marqueeTrack}>
            {[...reviews, ...reviews].map((rev, index) => (
              <div key={`${rev.id}-${index}`} className={`${styles.card} ${rev.colorClass}`}>

                
                <p className={styles.quote}>"{rev.text}"</p>
                
                <div className={styles.authorSection}>
                  <div className={styles.authorInfo}>
                    <div className={styles.authorName}>{rev.author}</div>
                    <svg className={styles.authorUnderline} viewBox="0 0 100 10" preserveAspectRatio="none">
                      <path d="M0,5 Q 50,8 100,2" fill="none" stroke="#FFC107" strokeWidth="3" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
