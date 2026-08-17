import styles from './Facilities.module.css';

const facilities = [
  { id: 1, title: 'Child-Safe Environment', icon: '🛡️', colorClass: styles.purpleCard, image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80' },
  { id: 2, title: 'Interactive Play Zones', icon: '🛝', colorClass: styles.yellowCard, image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=800&q=80' },
  { id: 3, title: 'Hygienic Dining', icon: '🍱', colorClass: styles.greenCard, image: 'https://images.unsplash.com/photo-1540479859555-17af45c78602?auto=format&fit=crop&w=800&q=80' },
  { id: 4, title: 'CCTV Surveillance', icon: '📹', colorClass: styles.purpleCard, image: 'https://images.unsplash.com/photo-1549109926-58f039549485?auto=format&fit=crop&w=800&q=80' },
];

export default function Facilities() {
  return (
    <section className={`section ${styles.facilities}`}>
      <img src="/sticker-globe.png" alt="Globe Doodle" className="sticker sticker-delay-2" style={{ bottom: '5%', right: '5%', width: '150px', zIndex: 0 }} />
      {/* Background Decorations */}
      <div className={styles.blobPurple}></div>
      <div className={styles.blobGreen}></div>
      <div className={styles.blobYellow}></div>
      
      <div className={styles.decorPlane}>
        <svg width="150" height="100" viewBox="0 0 150 100" fill="none" stroke="#B040B0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10,90 C30,120 70,110 80,70 C85,50 60,30 40,50 C20,70 50,90 100,50" strokeDasharray="4,6" opacity="0.6"/>
          <path d="M140 20L80 70L85 45L140 20Z" fill="#F3E5F5"/>
          <path d="M140 20L95 80L80 70M140 20L50 50L80 70M85 45L110 35"/>
        </svg>
      </div>
      <div className={styles.decorStar}>
        <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="#FFC107" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      </div>
      <div className={styles.decorHeart}>
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#ff80ab" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 10, maxWidth: '1400px' }}>
        <div className={styles.header}>
          <div className={styles.titleWrapper}>
            <div className={styles.sunburstLeft}>
              <svg width="30" height="40" viewBox="0 0 30 40" fill="none" stroke="#FFC107" strokeWidth="4" strokeLinecap="round">
                <path d="M5,5 L15,15 M2,20 L15,20 M5,35 L15,25"/>
              </svg>
            </div>
            
            <div className={styles.titleContent}>
              <h2 className="font-handwriting">Campus Facilities</h2>
              <svg className={styles.underline} viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="#FFC107" strokeWidth="4" fill="none" strokeLinecap="round" />
              </svg>
            </div>

            <div className={styles.sunburstRight}>
              <svg width="30" height="40" viewBox="0 0 30 40" fill="none" stroke="#FFC107" strokeWidth="4" strokeLinecap="round">
                <path d="M25,5 L15,15 M28,20 L15,20 M25,35 L15,25"/>
              </svg>
            </div>
          </div>
          <p className={styles.subtitle}>A safe, inspiring and well-equipped environment for every child.</p>
        </div>
        
        <div className={styles.grid}>
          {facilities.map((fac) => (
            <div key={fac.id} className={`${styles.card} ${fac.colorClass}`}>
              <img src={fac.image} alt={fac.title} className={styles.image} />
              <div className={styles.content}>
                <div className={styles.iconBox}>{fac.icon}</div>
                <h3 dangerouslySetInnerHTML={{ __html: fac.title.replace('-', '-<br/>').replace(' ', '<br/>') }}></h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
