import styles from "./Style/Header.module.scss";
import logo from '../../../assets/images/illustrations/vidrelo-logo-branca.svg'
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default function Header(){
    return(
        <>
        <div className={styles.header}>
        <Link  to="/" className={styles["link-arrow"]}>
            <FaArrowLeft/> 
            </Link>
            <div className={styles['div-logo']}>
                <img src={logo} alt="Logo" />
            </div>
            <div className={styles['div-button']}>
                <Link to="/login" className={styles['btn-header']}>Entrar</Link>
            </div>
        </div>
        </>
    )
}