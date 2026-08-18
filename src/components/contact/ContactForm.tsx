"use client";

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const searchParams = useSearchParams();
  const initPurpose = searchParams.get('purpose') || '';
  const [purpose, setPurpose] = useState(initPurpose);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const childName = formData.get('childName');
    const parentName = formData.get('parentName');
    const email = formData.get('email');
    const mobile = formData.get('mobile');
    const purposeValue = formData.get('purpose');
    
    let message = `*New Contact Form Submission*\n\n` +
                  `*Child's Name:* ${childName}\n` +
                  `*Parent's Name:* ${parentName}\n` +
                  `*Email:* ${email}\n` +
                  `*Mobile:* ${mobile}\n` +
                  `*Purpose:* ${purposeValue === 'visit' ? 'Visit School' : 'Inquire'}\n`;
                  
    if (purposeValue === 'visit') {
      const date = formData.get('date');
      const time = formData.get('time');
      message += `*Preferred Date:* ${date}\n*Preferred Time:* ${time}\n`;
    } else if (purposeValue === 'inquire') {
      const inquiry = formData.get('inquiry');
      message += `*Inquiry:* ${inquiry}\n`;
    }

    // Use one of the provided numbers
    const whatsappNumber = "917030051844";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    setIsSubmitted(true);
  };

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
          
          {isSubmitted ? (
            <div className={styles.successMessage} style={{ textAlign: 'center', padding: '3rem 0' }}>
              <h2 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Thank You! 🎉</h2>
              <p style={{ fontSize: '1.1rem', color: '#555' }}>Your message has been initiated via WhatsApp.</p>
              <button onClick={() => setIsSubmitted(false)} className={styles.btnSubmit} style={{ marginTop: '2rem', width: 'auto', padding: '0.8rem 2rem' }}>Send Another</button>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.row}>
                <input type="text" name="childName" placeholder="Child's Name*" className={styles.input} required />
                <input type="text" name="parentName" placeholder="Parent's Name*" className={styles.input} required />
              </div>
              
              <div className={styles.row}>
                <input type="email" name="email" placeholder="Email*" className={styles.input} required />
                <input type="tel" name="mobile" placeholder="Mobile*" className={styles.input} required />
              </div>
              
              <div className={styles.row}>
                <select name="purpose" className={styles.select} required value={purpose} onChange={(e) => setPurpose(e.target.value)}>
                  <option value="" disabled>Select Purpose*</option>
                  <option value="visit">Visit School</option>
                  <option value="inquire">Inquire</option>
                </select>
              </div>

              {purpose === 'visit' && (
                <div className={styles.row}>
                  <input type="date" name="date" className={styles.input} required title="Preferred Day" />
                  <input type="time" name="time" className={styles.input} required title="Preferred Time" />
                </div>
              )}
              
              {purpose === 'inquire' && (
                <div className={styles.row}>
                  <textarea name="inquiry" placeholder="Write your comment / inquiry" className={styles.textarea} rows={4} required></textarea>
                </div>
              )}
              
              <button type="submit" className={styles.btnSubmit}>Submit</button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
