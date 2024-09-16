import styles from './Button.module.css';

interface Props{
  bname:string;
  link:string;
  width:string;
}
const Button = ({bname,link,width}:Props) => {
  return (
    <div className={styles["txt"]} style={{width:width}}>
      <a href={link}>{bname}</a></div>
  )
}

export default Button;