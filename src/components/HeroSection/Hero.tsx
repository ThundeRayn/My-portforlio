import styles from './Hero.module.css';
import { HiCursorClick } from "react-icons/hi";
import Button from '../../assets/Button';

const Hero = () => {

  return (
    <div className={styles["container"]}>  

      <div className={styles["bgimg"]} />

      <div className={styles["intro1"]}>
          Hi there
          <HiCursorClick size={28} color='#aaa'/>
        </div>
      <div className={styles["intro1"]}>I design and develop UX/UI web  solutions</div>
      <div className={styles["intro0"]}>
        My name is Shirong, a passionate UX/UI designer
        & website developer, based on Ontario,
        CA. Find my contact info below!</div>
      
      <div className={styles["btn"]}>
        <Button bname={"contact"} link={"/about"} width={"200px"}/></div>

      
    </div>
  )
}

export default Hero