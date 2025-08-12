import React from 'react';
import styles from './portfolio.module.css';
import Avatar from '../../assets/Avatar';
import Cards from '../../assets/Cards';
import TechCard from './TechCard';
import ReactIcon from '/src/assets/icons/react.svg?react';
import TypeScriptIcon from '/src/assets/icons/typescript.svg?react';
import JavaScriptIcon from '/src/assets/icons/javascript.svg?react';
import HTMLIcon from '/src/assets/icons/html.svg?react';
import JavaIcon from '/src/assets/icons/java.svg?react';
import PostgreSQLIcon from '/src/assets/icons/elephant.svg?react';
import NodeJSIcon from '/src/assets/icons/nodejs.svg?react';
import MangoDBIcon from '/src/assets/icons/mangodb.svg?react';
import TailwindIcon from '/src/assets/icons/tailwind.svg?react';
import ThreeJSIcon from '/src/assets/icons/cube.svg?react';
import shadcnUIIcon from '/src/assets/icons/shadcn.svg?react';

import githubIcon from '/src/assets/icons/github.svg?react';
import awsIcon from '/src/assets/icons/aws.svg?react';
import DockerIcon from '/src/assets/icons/docker.svg?react';

const portfolio = () => {

  return (
    <div className={styles.container}>
      <Avatar />

      <h3 className={styles.title}>
        My Favoriate Tech Stack
      </h3>

      <div className={styles.techContainer}>

        <TechCard 
          title={'Programming'} 
          items={['TypeScript','JavaScript','HTML CSS','Java']}
          icons={[TypeScriptIcon, JavaScriptIcon, HTMLIcon, JavaIcon]}
        />

        <TechCard
          title={'FrontEnd'} 
          items={['React','Tailwind','shadcn/UI','Three.js']}
          icons={[ReactIcon, TailwindIcon, shadcnUIIcon, ThreeJSIcon]}
        />

        <TechCard
          title={'BackEnd'} 
          items={['NodeJS','Express','PostgreSQL','MangoDB']}
          icons={[NodeJSIcon, JavaScriptIcon, PostgreSQLIcon, MangoDBIcon]}
        />

        <TechCard
          title={'CI/CD'} 
          items={['GitHub','AWS','Docker']}
          icons={[githubIcon, awsIcon, DockerIcon]}
        />

        {/* <Cards id="card-cicd">
          <div className={styles.techContent}>
            <h3 className={styles.techTitle}>CI/CD</h3>
            <p className={styles.techItem}>GitHub</p>
            <p className={styles.techItem}>AWS</p>
            <p className={styles.techItem}>Docker</p>
          </div>
        </Cards> */}
      </div>
    </div>
  );
};

export default portfolio;