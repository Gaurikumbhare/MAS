"use client";

import Link from 'next/link';
import { useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>
          <Link href="/" className={styles.logo}>
            <img src="/new_logo.png" alt="Miles Along Smiles Logo" className={styles.logoImage} />
          </Link>
          <ul className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ''}`}>
            <li><Link href="/" className={styles.link} onClick={toggleMenu}>Home</Link></li>
            <li><Link href="/about" className={styles.link} onClick={toggleMenu}>About Us</Link></li>
            <li><Link href="/programs" className={styles.link} onClick={toggleMenu}>Programs</Link></li>
            <li><Link href="/contact" className={styles.link} onClick={toggleMenu}>Contact Us</Link></li>
            <img src="/sticker-sun.png" alt="Fun Sun Sticker" className={styles.menuSticker1} />
            <img src="/sticker-flower.png" alt="Fun Flower Sticker" className={styles.menuSticker2} />
          </ul>

          <div className={styles.actions}>
            <Link href="/contact?purpose=visit" style={{ textDecoration: 'none' }}>
              <button className="btn btn-primary">Book a Visit</button>
            </Link>
            <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle menu">
              <span className={`${styles.bar} ${isMenuOpen ? styles.open : ''}`}></span>
              <span className={`${styles.bar} ${isMenuOpen ? styles.open : ''}`}></span>
              <span className={`${styles.bar} ${isMenuOpen ? styles.open : ''}`}></span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
