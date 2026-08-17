import Link from 'next/link';
import styles from './CTA.module.css';

export default function CTA() {
  return (
    <section className={styles.cta}>
      {/* Wavy Top Divider */}
      <div className={styles.waveDivider}>
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path fill="var(--secondary)" d="M0,50 C320,120 720,0 1440,50 V100 H0 Z"></path>
        </svg>
      </div>
      
      <div className="container">
        <div className={styles.content}>
          <div className={styles.titleWrapper}>
            <span className={styles.decoration}>✨</span>
            <h2 className="font-handwriting" style={{ margin: 0 }}>Every beautiful journey begins with a smile.</h2>
            <span className={styles.decoration}>✨</span>
          </div>
          <p className={styles.subtitle}>Join the Miles Along Smiles Family today!</p>
          <div className={styles.btnGroup}>
            <Link href="/contact?purpose=visit">
              <button className="btn btn-primary">Book a school visit <span>→</span></button>
            </Link>
            <Link href="/contact">
              <button className="btn btn-primary" style={{ backgroundColor: 'white', color: 'var(--primary-dark)', border: '2px solid var(--secondary)' }}>Contact Us</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
