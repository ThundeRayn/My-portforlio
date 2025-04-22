import styles from './Footer.module.css'
import CopyToClip from '../../assets/CopyToClip'

const Footer = () => {
  return (
    <div className={styles['container']}>
        <ul className={styles['itemlist']}>
            <li className={styles['item']}>
              <a onClick={()=> window.open("https://www.linkedin.com/in/shirong-tang/", "_blank")}>linkedin</a></li>
            <li className={styles['item']}>
              <a href="mailto:tangshirong477@gmail.com">tangshirong477@gmail.com</a>
              <div className={styles['copy']}><CopyToClip content="tangshirong477@gmail.com"/></div>
              </li>
            <li className={styles['item']}>
              <span>phone: +1 226(339)8351</span>
              <div className={styles['copy']}><CopyToClip content="2263398351"/></div>
            </li>
        </ul>
        
    </div>
  )
}

export default Footer