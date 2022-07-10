import logo from '../../../assets/images/illustrations/vidrelo-logo-branca.svg'
import styles from "./Style/Header.module.scss"

export default function Header(){

    return(
        <>
            <div className={styles.header}>
                <img src={logo} alt="Logo" />
            </div>
        </>
    )
}