import React from 'react'
import styles from './cards.module.css';

interface BorderLightCardProps {
  children?: React.ReactNode;
}

const Cards: React.FC<BorderLightCardProps> = ({ children }) => {
  return (
    <div 
      className={styles.techField}
    >
      <div className={styles.dots}></div>
      {children}
    </div>
  );
}

export default Cards;
