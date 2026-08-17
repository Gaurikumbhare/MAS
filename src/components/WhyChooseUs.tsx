import styles from './WhyChooseUs.module.css';

const reasons = [
  {
    id: 1,
    title: 'Holistic Learning',
    desc: 'Fostering all-round development through a balanced blend of academics, play, and life skills.',
    image: '/hero-kid.png',
    shapeClass: styles.shapePolaroidLeft,
  },
  {
    id: 2,
    title: 'Expert Educators',
    desc: 'Skilled teachers dedicated to nurturing every child\'s unique potential.',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=400&q=80',
    shapeClass: styles.shapeCircle,
  },
  {
    id: 3,
    title: 'Safe and Secure',
    desc: 'A protected, child-friendly environment ensuring safety and peace of mind.',
    image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=400&q=80',
    shapeClass: styles.shapePolaroidRight,
  },
  {
    id: 4,
    title: 'Innovative Learning',
    desc: 'Engaging, modern teaching methods that make learning fun and impactful.',
    image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=400&q=80',
    shapeClass: styles.shapeTriangle,
  },
];

export default function WhyChooseUs() {
  return (
    <section className={styles.whyUsSection}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Why Choose Miles Along Smiles?</h2>
          <p className={styles.description}>
            Miles Along Smiles is your experienced trusted partner in providing exceptional early education for your child. Here's why Miles Along Smiles stands out as the preferred choice for parents seeking the best for their little ones
          </p>
        </div>

        <div className={styles.flowContainer}>
          {/* Dashed line background SVG */}
          <div className={styles.dashedLineContainer}>
             <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1000 100" className={styles.dashedSvg}>
                <path d="M 100,50 C 300,100 300,0 500,50 C 700,100 700,0 900,50" fill="none" stroke="#7e57c2" strokeWidth="3" strokeDasharray="10,10" />
             </svg>
          </div>

          <div className={styles.cardsGrid}>
            {reasons.map((reason) => (
              <div key={reason.id} className={styles.card}>
                <div className={`${styles.imageWrapper} ${reason.shapeClass}`}>
                  <img src={reason.image} alt={reason.title} className={styles.image} />
                </div>
                <h3 className={styles.cardTitle}>{reason.title}</h3>
                <p className={styles.cardDesc}>{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
