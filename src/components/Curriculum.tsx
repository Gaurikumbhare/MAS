import styles from './Curriculum.module.css';

const approaches = [
  { id: 1, icon: '🗣️', title: 'Linguistic Intelligence', desc: 'Developing language skills through storytelling, phonics, and conversation.' },
  { id: 2, icon: '🔢', title: 'Logical Intelligence', desc: 'Early math concepts, puzzles, and problem-solving activities.' },
  { id: 3, icon: '🎨', title: 'Spatial Intelligence', desc: 'Art, crafts, drawing, and visual-spatial awareness games.' },
  { id: 4, icon: '🏃‍♂️', title: 'Kinesthetic Intelligence', desc: 'Physical development through dance, sports, and fine motor activities.' },
  { id: 5, icon: '🎵', title: 'Musical Intelligence', desc: 'Rhymes, rhythm, singing, and exploring musical instruments.' },
  { id: 6, icon: '🤝', title: 'Interpersonal Intelligence', desc: 'Group play, sharing, empathy, and social emotional learning.' },
];

export default function Curriculum() {
  return (
    <section className={`section ${styles.curriculum}`}>
      <div className="container">
        <div className={styles.header}>
          <h2 className="font-handwriting">Our Holistic Approach</h2>
          <p>Inspired by Bloom's approach and Howard Gardner's Multiple Intelligences, we nurture every child's unique strengths and learning style.</p>
        </div>
        
        <div className={styles.grid}>
          {approaches.map((item) => (
            <div key={item.id} className={styles.card}>
              <span className={styles.icon}>{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
