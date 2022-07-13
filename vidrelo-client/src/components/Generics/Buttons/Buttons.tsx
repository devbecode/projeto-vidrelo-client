import { InputHTMLAttributes } from "react"
import { Link } from "react-router-dom";
import "./Style/Buttons.scss"

interface ButtonProps extends InputHTMLAttributes<HTMLButtonElement>{
    text:string,
    id: any
    path: string
}

export default function InputText({path, id, text}: ButtonProps){
    
    return(
        <>
         <Link to={path} className="btn" id={id} type="submit">{text}</Link>
        </>
    )
}