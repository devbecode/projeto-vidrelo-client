import { InputHTMLAttributes } from "react"
import "./Style/Buttons.scss"

interface ButtonProps extends InputHTMLAttributes<HTMLButtonElement>{
    text:string,
    id: any
}

export default function InputText({id, text}: ButtonProps){
    
    return(
        <>
         <button className="btn" id={id}>{text}</button>
        </>
    )
}