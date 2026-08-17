import styles from './Gallery.module.css';
import SmartVideo from './SmartVideo';

const items = [
  '/IMG_3814.mp4',
  '/IMG_3833.mp4',
  '/IMG_3703.mp4',
  '/IMG_3705.mp4',
  '/IMG_3742.mp4',
  '/IMG_3760.mp4',
];

export default function Gallery() {
  return (
    <section className={`section ${styles.gallery}`}>
      {/* Decorations */}
      <div className={styles.decorHeart}>♡</div>
      <div className={styles.decorStar}>☆</div>
      <img src="/sticker-paper-plane.png" alt="Paper Plane" className={`sticker ${styles.stickerPlane}`} />
      <img src="/sticker-star.png" alt="Star Doodle" className={`sticker sticker-delay-1 ${styles.stickerStar}`} />
      <img src="/sticker-heart.png" alt="Heart Doodle" className={`sticker sticker-delay-3 ${styles.stickerHeart}`} />

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
              {item.endsWith('.MOV') || item.endsWith('.mp4') ? (
                <SmartVideo src={`${item}#t=0.1`} className={styles.image} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
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
