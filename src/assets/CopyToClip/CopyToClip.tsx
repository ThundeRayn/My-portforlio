
import { MdContentCopy } from "react-icons/md";
import styles from './CopyToClip.module.css';
import { FaCheck } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useHover } from "@uidotdev/usehooks";

interface Props{
    content:string;
}

const CopyToClip = ({content}:Props) => {

    const [copied,setCopied]= useState(false);
    const [ref,hovering] = useHover();

    useEffect(()=>{
        setCopied(false);
    },[hovering])

return (
    
    <>
        <div 
            onClick={() => {
                navigator.clipboard.writeText(content);
                setCopied(true);
            }}
            className={styles["btn"]}
            ref={ref}
        >
            {hovering?
                (copied?
                    <FaCheck size="14"/>
                    :<MdContentCopy size="14"/>)
                :<MdContentCopy size="14"/>}
        </div>
    </>
  )
}

export default CopyToClip