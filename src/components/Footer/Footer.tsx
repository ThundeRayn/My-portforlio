import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles['container']}>
        <ul className={styles['itemlist']}>
            <li className={styles['item']}>
              <a onClick={()=> window.open("https://www.linkedin.com/in/shirong-tang/", "_blank")}>linkedin</a></li>
            <li className={styles['item']}>
              <a href="mailto:tangshirong477@gmail.com">tangshirong477@gmail.com</a></li>
            <li className={styles['item']}>
              <a>phone: +1 226(339)8351</a> </li>
        </ul>
        
    </div>
  )
}

export default Footer