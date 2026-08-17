import styles from './AboutAwards.module.css';

const awards = [
  { id: 1, title: "ET Education - Excellence in Innovative Pedagogy Award 2025", image: "https://images.unsplash.com/photo-1578269174936-2709b6aeb913?auto=format&fit=crop&w=400&q=80" },
  { id: 2, title: "Early Years Educators Summit & Awards - Trailblazer in STEM & Coding for Young Learners Award 2025", image: "https://images.unsplash.com/photo-1561489422-45de3d015e3e?auto=format&fit=crop&w=400&q=80" },
  { id: 3, title: "ET Edge - Recognised as the Prestigious Learning Institute of India 2025", image: "https://images.unsplash.com/photo-1574516768783-36fa33c698f2?auto=format&fit=crop&w=400&q=80" },
];

export default function AboutAwards() {
  return (
    <section className={styles.awardsSection}>
      <div className="container">
        
        <div className={styles.content}>
          <div className={styles.leftColumn}>
            <h2 className={styles.title}>Our Awards</h2>
            <p className={styles.description}>
              Our accolades are a reflection of the trust parents place in us,
              and the joyful learning journeys we create every day.
            </p>
            
            <div className={styles.grid}>
              {awards.map((award) => (
                <div key={award.id} className={styles.card}>
                  <div className={styles.imageWrapper}>
                    <img src={award.image} alt={award.title} className={styles.image} />
                  </div>
                  <p className={styles.awardTitle}>{award.title}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className={styles.rightColumn}>
            {/* Flower decoration behind deer */}
            <div className={styles.flowerDecor}>
              <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                <path d="M50 0 C60 20, 80 40, 100 50 C80 60, 60 80, 50 100 C40 80, 20 60, 0 50 C20 40, 40 20, 50 0 Z" fill="#f7d268"/>
                <circle cx="50" cy="50" r="20" fill="#448aff" />
              </svg>
            </div>
            {/* Deer graphic (using placeholder) */}
            <img src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80" alt="Deer mascot holding trophy" className={styles.mascot} />
          </div>
        </div>

      </div>
    </section>
  );
}
