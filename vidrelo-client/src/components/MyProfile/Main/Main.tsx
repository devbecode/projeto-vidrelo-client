import styles from "./Style/Main.module.scss"
import Header from "../Header/Header"

export default function Main(){
    return(
        <>
        <Header/>
        <div className={styles["main-container"]}>
            Parte Main
        </div>
        </>
    )
}