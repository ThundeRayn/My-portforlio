import React, { useRef } from 'react';
import styles from './portfolio.module.css';

const Portfolio = () => {
  const avatarRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--before-top', `${y}px`);
    e.currentTarget.style.setProperty('--before-left', `${x}px`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        <a
          ref={avatarRef}
          onMouseMove={handleMouseMove}
        >
          <img
            src="/img/crow-portfolio.webp"
            alt="Crow Profile"
            style={{ width: '120px', height: '120px', borderRadius: '50%', display: 'block' }}
          />
        </a>
      </div>
    </div>
  );
};

export default Portfolio;