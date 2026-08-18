import styles from './AboutHero.module.css';

export default function AboutHero() {
  return (
    <section className={styles.heroSection}>
      <div className="container" style={{ position: 'relative' }}>
        {/* Decorative Stickers outside the image */}
        <img src="/sticker-heart.png" alt="Heart" className="sticker sticker-delay-2" style={{ position: 'absolute', top: '-40px', right: '-20px', width: '100px', transform: 'rotate(15deg)', zIndex: 10 }} />
        <img src="/sticker-paper-plane.png" alt="Paper Plane" className="sticker sticker-delay-1" style={{ position: 'absolute', bottom: '-50px', left: '-30px', width: '120px', transform: 'rotate(-10deg)', zIndex: 10 }} />
        
        <div className={styles.imageContainer}>
          <img src="/image copy 2.png" alt="At Miles Along Smiles, the early years count" className={styles.heroImage} />
        </div>
      </div>
    </section>
  );
}
