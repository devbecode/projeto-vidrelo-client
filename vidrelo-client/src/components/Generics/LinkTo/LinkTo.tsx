import { InputHTMLAttributes } from "react"
import { Link } from "react-router-dom";
import styles from "./Style/LinkTo.module.scss"

interface ButtonProps extends InputHTMLAttributes<HTMLButtonElement>{
    text:string,
    id: any,
    path: string,
    className: string
}

export default function LinkTo({path, id, className, text}: ButtonProps){
    
    return(
        <>
         <Link to={path} className={styles.btn2} id={id}>{text}</Link>
        </>
    )
}