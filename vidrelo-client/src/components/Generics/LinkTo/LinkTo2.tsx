import { InputHTMLAttributes } from "react"
import { Link } from "react-router-dom";
import styles from "./Style/LinkTo.module.scss"

interface ButtonProps extends InputHTMLAttributes<HTMLButtonElement>{
    text:string,
    id: any,
    path: string,
}

export default function LinkTo2({path, id, text}: ButtonProps){
    
    return(
        <>
         <Link to={path} className={styles.btn1} id={id}>{text}</Link>
        </>
    )
}