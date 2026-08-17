import styles from './Testimonials.module.css';

const reviews = [
  { id: 1, text: "Miles Along Smiles truly feels like a second home for our daughter. The play-based learning approach has made her so much more confident and curious!", author: "Priya S., Parent", colorClass: styles.purpleCard, avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80" },
  { id: 2, text: "The teachers are incredibly nurturing. I love how they focus on both academics and social skills. My son loves going to school every day.", author: "Rahul M., Parent", colorClass: styles.yellowCard, avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80" },
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
        
        <div className={styles.grid}>
          {reviews.map((rev) => (
            <div key={rev.id} className={`${styles.card} ${rev.colorClass}`}>
              <div className={styles.cardHeader}>
                <div className={styles.stars}>
                  <svg width="120" height="24" viewBox="0 0 120 24" fill="none" stroke="#FFC107" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    <polygon points="36 2 39.09 8.26 46 9.27 41 14.14 42.18 21.02 36 17.77 29.82 21.02 31 14.14 26 9.27 32.91 8.26 36 2"/>
                    <polygon points="60 2 63.09 8.26 70 9.27 65 14.14 66.18 21.02 60 17.77 53.82 21.02 55 14.14 50 9.27 56.91 8.26 60 2"/>
                    <polygon points="84 2 87.09 8.26 94 9.27 89 14.14 90.18 21.02 84 17.77 77.82 21.02 79 14.14 74 9.27 80.91 8.26 84 2"/>
                    <polygon points="108 2 111.09 8.26 118 9.27 113 14.14 114.18 21.02 108 17.77 101.82 21.02 103 14.14 98 9.27 104.91 8.26 108 2"/>
                  </svg>
                </div>
                <div className={styles.quoteIcon}>”</div>
              </div>
              
              <p className={styles.quote}>"{rev.text}"</p>
              
              <div className={styles.authorSection}>
                <img src={rev.avatar} alt={rev.author} className={styles.avatar} />
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
    </section>
  );
}
