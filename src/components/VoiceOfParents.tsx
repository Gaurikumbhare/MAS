'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './VoiceOfParents.module.css';

export default function VoiceOfParents() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    // Check initially
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Only auto-play on intersection if on mobile
    if (!isMobile) return;

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoRef.current?.play().catch(e => console.log('Autoplay prevented by browser:', e));
        } else {
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
  }, [isMobile]);

  const handleMouseEnter = () => {
    if (!isMobile && videoRef.current) {
      videoRef.current.play().catch(e => console.log('Autoplay prevented:', e));
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile && videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <section className={`section ${styles.section}`}>
      {/* Decorative Background Elements */}
      <div className={styles.decorations}>
        <svg className={styles.star1} viewBox="0 0 24 24" fill="#FFC107"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
        <svg className={styles.star2} viewBox="0 0 24 24" fill="#FFC107"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
        <svg className={styles.star3} viewBox="0 0 24 24" fill="#4DB6AC"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
        <svg className={styles.heart1} viewBox="0 0 24 24" fill="#FF4081"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
        <svg className={styles.heart2} viewBox="0 0 24 24" fill="#673AB7"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
        <svg className={styles.heart3} viewBox="0 0 24 24" fill="#03A9F4"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
        <svg className={styles.cloud1} viewBox="0 0 24 24" fill="#FFE0B2"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/></svg>
        <svg className={styles.cloud2} viewBox="0 0 24 24" fill="#E1BEE7"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/></svg>
        <svg className={styles.plane1} viewBox="0 0 24 24" fill="#FF5722"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
        <svg className={styles.circle1} viewBox="0 0 24 24" fill="none" stroke="#FFCA28" strokeWidth="4"><circle cx="12" cy="12" r="10"/></svg>
        <svg className={styles.circle2} viewBox="0 0 24 24" fill="none" stroke="#FF4081" strokeWidth="4"><circle cx="12" cy="12" r="10"/></svg>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 10, maxWidth: '1200px' }}>
        <div className={styles.header}>
          <div className={styles.titleWrapper}>
            <div className={styles.titleContent}>
              <h2 className={styles.mainTitle}>
                <span className={`${styles.titleWord} ${styles.purpleText}`}>Voices</span>
                <span className={styles.titleHeartWrapper}>
                  <svg className={styles.titleHeart} viewBox="0 0 24 24" fill="#FFC107"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                  <span className={styles.titleHeartText}>of</span>
                </span>
                <span className={`${styles.titleWord} ${styles.pinkText}`}>Parents</span>
              </h2>
              <p className={styles.subtitle}>Real stories. Real smiles. Real impact.</p>
            </div>
          </div>
        </div>

        <div className={styles.carouselWrapper}>
          <button className={`${styles.arrow} ${styles.leftArrow}`} onClick={() => document.getElementById('vop-carousel')?.scrollBy({ left: -350, behavior: 'smooth' })}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          
          <div id="vop-carousel" className={styles.carousel}>
            <div className={styles.carouselItem}>
              <div 
                className={styles.videoCard}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
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
                <div className={styles.iconWrapper}>
                  <div className={styles.iconCircle}>
                    {/* Plant Icon */}
                    <svg viewBox="0 0 100 100" className={styles.cardIcon}>
                      <circle cx="50" cy="50" r="45" fill="#8E24AA" />
                      <path d="M40 70 L60 70 L55 50 L45 50 Z" fill="#FFCA28" />
                      <circle cx="47" cy="60" r="3" fill="#000" />
                      <circle cx="53" cy="60" r="3" fill="#000" />
                      <path d="M48 65 Q50 68 52 65" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" />
                      <path d="M50 50 C30 50 30 20 50 20 C50 20 55 45 50 50 Z" fill="#66BB6A" />
                      <path d="M50 50 C70 50 70 25 50 25 C50 25 45 45 50 50 Z" fill="#81C784" />
                    </svg>
                  </div>
                </div>
                <h3 className={`${styles.cardTitle} ${styles.purpleText}`}>Inspiring Growth</h3>
                <div className={styles.cardDivider}>
                  <span className={styles.dividerLine}></span>
                  <svg className={styles.dividerHeart} viewBox="0 0 24 24" fill="#FF4081"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                  <span className={styles.dividerLine}></span>
                </div>
                <p>Witnessing our children thrive in a nurturing environment has been the most rewarding experience.</p>
                <div className={`${styles.waveBottom} ${styles.wavePurple}`}>
                  <svg viewBox="0 0 1440 320" preserveAspectRatio="none"><path fill="currentColor" fillOpacity="1" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                  <span className={styles.quoteMark}>&ldquo;</span>
                </div>
              </div>
            </div>

            <div className={styles.carouselItem}>
              <div className={styles.textCard}>
                <div className={styles.iconWrapper}>
                  <div className={styles.iconCircle}>
                    {/* House Icon */}
                    <svg viewBox="0 0 100 100" className={styles.cardIcon}>
                      <circle cx="50" cy="50" r="45" fill="#FFA000" />
                      <path d="M25 55 L50 35 L75 55 L75 75 L25 75 Z" fill="#FFF59D" />
                      <path d="M20 55 L50 30 L80 55" fill="none" stroke="#EF5350" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M50 75 L50 60 C50 60 40 60 40 50 C40 40 50 50 50 50 C50 50 60 40 60 50 C60 60 50 60 50 60 Z" fill="#EF5350" />
                      <circle cx="35" cy="45" r="4" fill="#EF5350" />
                      <circle cx="65" cy="45" r="4" fill="#EF5350" />
                    </svg>
                  </div>
                </div>
                <h3 className={`${styles.cardTitle} ${styles.orangeText}`}>A Community of Care</h3>
                <div className={styles.cardDivider}>
                  <span className={styles.dividerLine}></span>
                  <svg className={styles.dividerHeart} viewBox="0 0 24 24" fill="#FF4081"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                  <span className={styles.dividerLine}></span>
                </div>
                <p>Miles Along Smiles isn't just a preschool; it's a family that partners with us every step of the way.</p>
                <div className={`${styles.waveBottom} ${styles.waveOrange}`}>
                  <svg viewBox="0 0 1440 320" preserveAspectRatio="none"><path fill="currentColor" fillOpacity="1" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                  <span className={styles.quoteMark}>&ldquo;</span>
                </div>
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
