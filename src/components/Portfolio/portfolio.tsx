import React from 'react';
import styles from './portfolio.module.css';
import Avatar from '../../assets/Avatar';
import Cards from '../../assets/Cards';

const portfolio = () => {

  return (
    <div className={styles.container}>
      <Avatar />

      <h3 className={styles.title}>
        My Favoriate Tech Stack
      </h3>

      <div className={styles.techContainer}>
        <Cards>
          <div className={styles.techContent}>
            <h3 className={styles.techTitle}>Titile</h3>
            <p className={styles.techItem}>Item</p>
            <p className={styles.techItem}>Item</p>
            <p className={styles.techItem}>Item</p>
          </div>
        </Cards>
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
};

export default portfolio;