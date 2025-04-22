import styles from './Button.module.css';

interface Props{
  bname:string;
  method:()=>void;
  width:string;
}
const Button = ({bname,method,width}:Props) => {
  return (
    <div className={styles["txt"]} style={{width:width}}>
      <a onClick={method}>{bname}</a>
    </div>
  )
}

export default Button;