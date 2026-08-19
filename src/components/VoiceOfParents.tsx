'use client';
import { useEffect, useRef } from 'react';
import styles from './VoiceOfParents.module.css';

export default function VoiceOfParents() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Play the video when it enters the viewport
          videoRef.current?.play().catch(e => console.log('Autoplay prevented by browser:', e));
        } else {
          // Pause the video when it leaves the viewport
          videoRef.current?.pause();
        }
      });
    }, options);

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <section className={`section ${styles.section}`}>
      <div className="container" style={{ position: 'relative', zIndex: 10, maxWidth: '1200px' }}>
        <div className={styles.header}>
          <div className={styles.titleWrapper}>
            <div className={styles.titleContent}>
              <h2 className="font-handwriting">Voices of Parents</h2>
              <svg className={styles.titleUnderline} viewBox="0 0 200 20" preserveAspectRatio="none">
                <path d="M5,15 Q 100,5 195,15" fill="none" stroke="#FFC107" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        </div>

        <div className={styles.carouselWrapper}>
          <button className={`${styles.arrow} ${styles.leftArrow}`} onClick={() => document.getElementById('vop-carousel')?.scrollBy({ left: -350, behavior: 'smooth' })}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          
          <div id="vop-carousel" className={styles.carousel}>
            <div className={styles.carouselItem}>
              <div className={styles.videoCard}>
                <video 
                  ref={videoRef}
                  className={styles.video} 
                  src="/parent1_optimized.mp4" 
                  controls 
                  playsInline
                  muted={false}
                />
              </div>
            </div>
            <div className={styles.carouselItem}>
              <div className={styles.textCard}>
                <h3>Inspiring Growth</h3>
                <p>Witnessing our children thrive in a nurturing environment has been the most rewarding experience.</p>
              </div>
            </div>
            <div className={styles.carouselItem}>
              <div className={styles.textCard}>
                <h3>A Community of Care</h3>
                <p>Miles Along Smiles isn't just a preschool; it's a family that partners with us every step of the way.</p>
              </div>
            </div>
          </div>
          
          <button className={`${styles.arrow} ${styles.rightArrow}`} onClick={() => document.getElementById('vop-carousel')?.scrollBy({ left: 350, behavior: 'smooth' })}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
