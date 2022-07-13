import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import logo from '../../../assets/images/illustrations/vidrelo-logo-branca.svg'
import styles from "./Style/Header.module.scss"

export default function Header(){

    return(
        <>
            <div className={styles.header}>
                <div className={styles["div-arrow"]}>
                    <Link  to="/" className={styles["link-arrow"]}>
                        <FaArrowLeft id={styles["arrow-header"]}/> 
                    </Link>
                </div>
                <div className={styles["img-div"]}>
                    <img src={logo} alt="Logo" />
                </div>
                <div className={styles['div-space']}>
                </div>
            </div>
        </>
    )
}