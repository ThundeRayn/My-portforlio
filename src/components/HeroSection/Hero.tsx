import styles from './Hero.module.css';
import { HiCursorClick } from "react-icons/hi";
import Button from '../../assets/Button';

const Hero = () => {

  const scrollToBottom = () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  });
}

  return (
    <div className={styles["container"]}>  

      <div className={styles["bgimg"]} />

      <div className={styles["intro1"]} >
          Hi there <HiCursorClick size={28} color='#aaa'/>
        </div>
      <div className={styles["intro1"]} >
        I design and develop software solutions
      </div>
      <div className={styles["intro0"]}>
        I'm Shirong T., a passionate developer focused on creating clean and precise software solutions.
        <br/>Find my contact info below!</div>
      
      <div className={styles["btn"]}>
        <Button bname={"contact"} method={scrollToBottom} width={"200px"}/></div>
    </div>
  )
}

export default Hero