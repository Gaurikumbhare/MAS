"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Footer.module.css';

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className={styles.footer}>
      {pathname !== '/contact' && (
        <img src="/sticker-heart.png" alt="Heart Doodle" className="sticker sticker-delay-3" style={{ top: '10%', right: '5%', width: '90px' }} />
      )}
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <h3 style={{ margin: 0, color: '#4a148c', display: 'flex', alignItems: 'center' }}>
              MilesAl <span style={{ width: '30px', height: '30px', background: 'linear-gradient(135deg, #e91e63, #ff9800)', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'white', margin: '0 4px', fontSize: '1rem' }}>😊</span> ng
            </h3>
            <h3 style={{ margin: '0 0 1rem 1rem', color: '#e91e63' }}>Smiles</h3>
            <p>Every beautiful journey begins with a smile.</p>
          </div>
          
          <div className={styles.links}>
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="#about">About Us</Link></li>
              <li><Link href="/programs">Programs</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className={styles.links}>
            <h4>Our Location</h4>
            <ul>
              <li>79/4, Yashodham Enclave,</li>
              <li>Near FCI Warehouse,</li>
              <li>Prashant Nagar, Ajni,</li>
              <li>Nagpur - 15</li>
            </ul>
          </div>
          
          <div className={`${styles.links} ${styles.contactInfo}`}>
            <h4>Contact Us</h4>
            <ul>
              <li>
                <span>📞</span>
                <span>7030051844, 7758084404</span>
              </li>
              <li>
                <span>📸</span>
                <span>
                  <a href="https://www.instagram.com/miles_along_smiless" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                    @miles_along_smiless
                  </a>
                </span>
              </li>
              <li>
                <span>✉️</span>
                <span>info@milesalongsmiles.com</span>
              </li>
            </ul>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
