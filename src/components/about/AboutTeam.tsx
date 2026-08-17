import styles from './AboutTeam.module.css';

export default function AboutTeam() {
  return (
    <section className={styles.teamSection}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Meet Our Founder</h2>
          <span className={styles.decoration}>✨</span>
        </div>
        
        <div className={styles.founderContent}>
          <div className={styles.founderCard}>
            <div className={styles.imageWrapper}>
              {/* Replace this URL with the actual founder's photo */}
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80" alt="Founder" className={styles.image} />
            </div>
          </div>
          <div className={styles.founderBio}>
            <h3 className={styles.founderName}>Founder Name</h3>
            <p className={styles.founderRole}>Founder & Director</p>
            <p className={styles.founderText}>
              "At Miles Along Smiles, our vision is to create a safe, nurturing, and joyful environment where every child feels valued. We believe that the early years are the most critical in a child's development, and we are committed to laying a strong foundation for their lifelong journey."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
