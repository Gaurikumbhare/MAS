import styles from './Gallery.module.css';

const items = [
  '/IMG_3814.MOV',
  '/IMG_3833.MOV',
  '/IMG_3703.MOV',
  '/IMG_3705.MOV',
  '/IMG_3742.MOV',
  '/IMG_3760.MOV',
];

export default function Gallery() {
  return (
    <section className={`section ${styles.gallery}`}>
      {/* Decorations */}
      <div className={styles.decorHeart}>♡</div>
      <div className={styles.decorStar}>☆</div>

      <div className="container">
        <div className={styles.header}>
          <div className={styles.titleWrapper}>
            <h2 className="font-handwriting">
              A Glimpse of Joy
              <svg className={styles.underline} viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="var(--primary)" strokeWidth="4" fill="none" />
              </svg>
            </h2>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className={`${styles.bgElement} ${styles.heart}`}>♡</div>
        <div className={`${styles.bgElement} ${styles.star}`}>☆</div>
        
        <div className={styles.grid}>
          {items.map((item, i) => (
            <div key={i} className={styles.item}>
              {item.endsWith('.MOV') ? (
                <video src={`${item}#t=0.1`} autoPlay loop muted playsInline className={styles.image} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
              ) : (
                <img src={item} alt={`Gallery image ${i + 1}`} className={styles.image} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
