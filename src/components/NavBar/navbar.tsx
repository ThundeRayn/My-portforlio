
import styles from './navbar.module.css';
//react icon
//import { GiBleedingEye } from "react-icons/gi";
import { GiRaven } from "react-icons/gi";


const navbar = () => {
  return (
    <>
    <div className={styles['container']}>
        <div className={styles['left-icon']}>
          < GiRaven color='#D9D9D9' size={27}/></div> 
        <ul className={styles['right-nav']}>
          <li><a href="/">home</a></li>
          <li><a href="/about">about</a></li>
          </ul>
    </div>

    </>
  )
}

export default navbar;