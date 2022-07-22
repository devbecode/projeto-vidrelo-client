import styles from "./Style/Forms.module.scss";
import InputText from "../../Generics/InputText/InputText";
import Buttons from "../../Generics/Buttons/Buttons";
import stylesBtn from "../../Generics/Buttons/Style/BtnStyles.module.scss"

export default function ForgotPassword() {

    return(
        <>
         <div className={styles.main}>
                <div className={styles["arrow-card"]}>
                </div>
                <div className={styles['card-card-form']}>
                    <div className={styles['form-card']}>
                        <h2>Esqueceu sua senha?</h2>
                        <form className={styles.form}>
                            <div className={styles['input-texts']}>
                                <InputText
                                    name='email'
                                    id='email'
                                    label='E-mail'
                                    type={"email"}
                                    placeholder={"Digite seu e-mail aqui"}
                                />
                                <div className={styles['error']}>
                                </div>
                            </div>
                            <div className={styles['btn-forms']}>
                            <Buttons
                                id={styles['btn-In']}
                                text="Enviar"
                                className={stylesBtn.btn2}
                            />
                        </div>
                        <div className={styles['informations-main']}>
                                <div className={styles['space-between']}></div>
                                {/* <h3>Um token será enviado ao seu e-mail</h3> */}
                            </div>
                        </form>
                    </div>
                </div>
                <div className={styles["space-card"]}>

                </div>
            </div>

        </>
    )
}