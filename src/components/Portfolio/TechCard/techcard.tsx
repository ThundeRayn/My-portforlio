import React from 'react'
import styles from './techcard.module.css';
import Cards from '../../../assets/Cards';
//import {ReactComponent as ReactIcon} from '../../../assets/icons/react.svg';

interface TechCardProps {
      title: string;
      items: string[];
      icons: React.FC<React.SVGProps<SVGSVGElement>>[];
}

const techcard:React.FC<TechCardProps> = ({title,items,icons}) => {
  return (
    <div>
        <Cards id="card-tech">
          <div className={styles.techContent}>
            <h3 id="tech-title" className={styles.techTitle}>{title}</h3>

            {icons.map((Icon, index) => (
              <p className={styles.techItem}>
                <Icon 
                  className={styles.techIcon}
                  style={{ color: '#fff', width: 25, height: 25 }}/>
                {items[index]}</p>
            ))}

          </div>
        </Cards>
    </div>
  )
}

export default techcard