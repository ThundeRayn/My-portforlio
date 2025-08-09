import React, { useEffect, useRef } from 'react'
import styles from './avatar.module.css';

const IMG_SIZE = 120; // px
const INNER_RADIUS = IMG_SIZE / 2;

const avatar = () => {
    const avatarRef = useRef<HTMLAnchorElement>(null);
    
      useEffect(() => {
        const handleDocumentMouseMove = (e: MouseEvent) => {
          if (!avatarRef.current) return;
          const rect = avatarRef.current.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          const dx = e.clientX - centerX;
          const dy = e.clientY - centerY;
          const angle = Math.atan2(dy, dx);
          // Calculate the point on the border of the image, but do not move the image or link
          const edgeX = rect.width / 2 + Math.cos(angle) * INNER_RADIUS;
          const edgeY = rect.height / 2 + Math.sin(angle) * INNER_RADIUS;
          avatarRef.current.style.setProperty('--before-top', `${edgeY}px`);
          avatarRef.current.style.setProperty('--before-left', `${edgeX}px`);
        };
    
        document.addEventListener('mousemove', handleDocumentMouseMove);
        return () => {
          document.removeEventListener('mousemove', handleDocumentMouseMove);
        };
      }, []);
      
  return (
    <div>
      <div className={styles.avatar}>
        <a
          ref={avatarRef}
        >
          <img
            src="/img/crow-portfolio.webp"
            alt="Crow Profile"
            style={{ width: '120px', height: '120px', borderRadius: '50%', display: 'block' }}
          />
        </a>
      </div>
    </div>
  )
}

export default avatar