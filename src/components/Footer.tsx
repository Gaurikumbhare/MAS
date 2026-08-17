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
            <img src="/logo.png" alt="Miles Along Smiles Logo" style={{ height: '80px', width: 'auto', marginBottom: '1rem' }} />
            <p>Every beautiful journey begins with a smile.</p>
          </div>
          
          <div className={styles.links}>
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
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
