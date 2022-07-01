import styles from "./Style/Header.module.scss";
import logo from '../../../assets/images/illustrations/vidrelo-logo-branca.svg'

export default function Header(){
    return(
        <>
        <div className={styles.header}>
            <div className={styles['div-logo']}>
                <img src={logo} alt="Logo" />
            </div>
            <div className={styles['div-button']}>
                <button className={styles['btn-header']}>Entrar</button>
            </div>
        </div>
        </>
    )
}