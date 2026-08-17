"use client";

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const searchParams = useSearchParams();
  const initPurpose = searchParams.get('purpose') || '';
  const [purpose, setPurpose] = useState(initPurpose);

  return (
    <section className={styles.contactSection}>
      <div className={`container ${styles.contactContainer}`}>
        
        {/* Left Side: Info & Character */}
        <div className={styles.leftPanel}>
          <h1 className={styles.title}>Contact Us</h1>
          
          <div className={styles.addressBox}>
            <p><strong>Miles Along Smiles</strong></p>
            <p>79/4, Yashodham Enclave,</p>
            <p>Near FCI Warehouse, Prashant Nagar,</p>
            <p>Ajni, Nagpur - 15</p>
            <br />
            <p>📞 7030051844, 7758084404</p>
            <p>📸 Instagram: <a href="https://www.instagram.com/miles_along_smiless" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none', borderBottom: '1px solid currentColor' }}>@miles_along_smiless</a></p>
          </div>

          <div className={styles.characterWrapper}>
            <img src="/contact_cartoon.png" alt="Contact Character" className={styles.character} style={{ mixBlendMode: 'multiply', filter: 'contrast(1.1) brightness(1.05)' }} />
          </div>
        </div>

        {/* Right Side: Form */}
        <div className={styles.rightPanel}>
          <p className={styles.formIntro}>
            Fill In The Form Below, To Get In Touch With Us At Miles Along Smiles – One Of The Best Preschools For Children In India
          </p>
          
          <form className={styles.form}>
            <div className={styles.row}>
              <input type="text" placeholder="Child's Name*" className={styles.input} required />
              <input type="text" placeholder="Parent's Name*" className={styles.input} required />
            </div>
            
            <div className={styles.row}>
              <input type="email" placeholder="Email*" className={styles.input} required />
              <input type="tel" placeholder="Mobile*" className={styles.input} required />
            </div>
            
            <div className={styles.row}>
              <select className={styles.select} required value={purpose} onChange={(e) => setPurpose(e.target.value)}>
                <option value="" disabled>Select Purpose*</option>
                <option value="visit">Visit School</option>
                <option value="inquire">Inquire</option>
              </select>
            </div>

            {purpose === 'visit' && (
              <div className={styles.row}>
                <input type="date" className={styles.input} required title="Preferred Day" />
                <input type="time" className={styles.input} required title="Preferred Time" />
              </div>
            )}
            
            {purpose === 'inquire' && (
              <div className={styles.row}>
                <textarea placeholder="Write your comment / inquiry" className={styles.textarea} rows={4} required></textarea>
              </div>
            )}
            
            <button type="submit" className={styles.btnSubmit}>Submit</button>
          </form>
        </div>

      </div>
    </section>
  );
}
