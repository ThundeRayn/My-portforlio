import styles from './OneTrack.module.css';
import frame from '../../../assets/img/Apple_16-inch-MacBook-Pro.png';
import img_signin from '../../../assets/img/dashboard abrev.png';

const OneTrack = () => {
  return (
    <>
    <div className={styles['container']}>

        <img 
            src={img_signin} 
            alt="Logo" 
            className={styles['display_img']}
            style={{width:"250px"}}/>

        {/*frame */}
        <img 
            src={frame} 
            alt="Logo" 
            className={styles['display_frame']}/>   
        
        <h3 className={styles['intro1']}>
            Website Application</h3>
    </div>
    </>
  )
}

export default OneTrack;