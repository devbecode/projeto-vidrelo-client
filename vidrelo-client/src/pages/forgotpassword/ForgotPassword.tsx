import Header from "../../components/Signin/Header/Header";
import Footer from "../../components/LandPage/Footer/Footer";
import Forms from "../../components/ForgotPassword/Forms/Forms";
import styles from"./Style/forgotPassword.module.scss";

export default function ForgotPassword() {

    return(
        <>
        <div className={styles.body}>
            <Header/>
            <Forms/>
            <Footer/>
        </div>
        </>
    )
}