import {useRef} from 'react';

const CopyToClip = (content:string) => {

const textRef = useRef('');

const copyToClipboard = () =>{
    if(textRef.current){
        //textRef.current.select(content);
        document.execCommand('copy');
        textRef.current = content;
    }
}

return (
    
    <div>
        <button
            onClick={copyToClipboard}>
            btn
        </button>
    </div>
  )
}

export default CopyToClip