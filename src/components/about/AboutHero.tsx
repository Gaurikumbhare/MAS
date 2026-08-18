import styles from './AboutHero.module.css';

export default function AboutHero() {
  return (
    <section className={styles.heroSection}>
      <div className="container" style={{ position: 'relative' }}>
        <div className={styles.imageContainer}>
          <img src="/image copy 4.png" alt="Teacher reading to children" className={styles.heroImage} />
          
          <div className={styles.overlay}>
            <h1 className={styles.title}>
              At Miles Along Smiles,<br />
              the early years<br />
              count
            </h1>
            <p className={styles.subtitle}>
              At Miles Along Smiles, we make the early years count<br />
              through a scientifically designed, developmentally<br />
              appropriate, play-based curriculum that nurtures each<br />
              child's uniqueness and builds a strong foundation,<br />
              academically, socially, and emotionally preparing<br />
              them for future learning and success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
