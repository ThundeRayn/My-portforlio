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
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
};

export default portfolio;