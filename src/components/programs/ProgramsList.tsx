import styles from './ProgramsList.module.css';

const programs = [
  {
    id: 1,
    title: 'Mother & Toddler Program',
    age: '6 Months – 3 Years',
    description: 'A thoughtfully designed program where parents and toddlers learn, play, explore, and bond together through music, movement, storytelling, sensory activities, and creative experiences.',
    features: [
      'Interactive music and movement sessions',
      'Sensory play and creative arts',
      'Guided parent-toddler bonding activities',
      'Early socialization with peers'
    ],
    image: '/IMG_3820.MOV',
    color: '#ff9a9e'
  },
  {
    id: 2,
    title: 'Kindergarten / Preschool',
    age: '2 – 6 Years',
    description: 'A child-centred learning environment that encourages curiosity, independence, communication, creativity, confidence, and essential early-life skills through engaging and activity-based learning.',
    features: [
      'Play-based and activity-driven curriculum',
      'Focus on cognitive, social, and emotional development',
      'Foundational literacy and numeracy skills',
      'Safe, nurturing, and stimulating classrooms'
    ],
    image: '/IMG_3778.MOV',
    color: '#a1c4fd'
  },
  {
    id: 3,
    title: 'Daycare',
    age: 'All Ages',
    description: 'A safe, caring, and engaging environment where children can spend their day learning, playing, socialising, and participating in meaningful activities under attentive supervision.',
    features: [
      'Flexible, full-day care in a homely environment',
      'Dedicated rest and nap times in a peaceful setting',
      'Engaging after-school activities and free play',
      'Attentive, certified, and compassionate staff'
    ],
    image: '/IMG_3850.MOV',
    color: '#fbc2eb'
  }
];

export default function ProgramsList() {
  return (
    <section className={styles.programsSection}>
      <div className={styles.largeContainer}>
        <div className={styles.grid}>
          {programs.map((program) => (
            <div key={program.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                {program.image.endsWith('.MOV') ? (
                  <video src={`${program.image}#t=0.1`} autoPlay loop muted playsInline className={styles.image} />
                ) : (
                  <img src={program.image} alt={program.title} className={styles.image} />
                )}
                {program.age !== 'All Ages' && (
                  <div className={styles.ageTag} style={{ backgroundColor: program.color }}>
                    Age: {program.age}
                  </div>
                )}
              </div>
              <div className={styles.content}>
                <h2 className={styles.title} style={{ color: program.color }}>{program.title}</h2>
                <p className={styles.description}>{program.description}</p>
                {program.features && (
                  <ul className={styles.featureList}>
                    {program.features.map((feature, i) => (
                      <li key={i}>
                        <span className={styles.checkIcon} style={{ color: program.color }}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
