'use client';

import { useEffect, useRef, useState } from 'react';

interface SmartVideoProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function SmartVideo({ src, className, style }: SmartVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (videoRef.current) {
              videoRef.current.play().catch(e => console.log('Autoplay prevented:', e));
            }
          } else {
            setIsVisible(false);
            if (videoRef.current) {
              videoRef.current.pause();
            }
          }
        });
      },
      { threshold: 0.1 } // Play when 10% visible
    );

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
    <video
      ref={videoRef}
      src={src}
      className={className}
      style={style}
      loop
      muted
      playsInline
      preload="metadata"
    />
  );
}
