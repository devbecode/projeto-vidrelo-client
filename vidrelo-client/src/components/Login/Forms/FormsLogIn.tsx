import styles from "./Style/FormsLogIn.module.scss";
//importando os icons
import { FaEye, FaEyeDropper, FaEyeSlash, FaFacebookF, FaArrowLeft } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import InputText from "../../Generics/InputText/InputText";
import Buttons from "../../Generics/Buttons/Buttons"
import { loginUser } from "../../../data/hooks/loginUser";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Forms() {

    return (
        <>
            <div className={styles.main}>
                <div className={styles["arrow-card"]}>
                    <Link to="/" className={styles["link-arrow"]}>
                        <FaArrowLeft />
                    </Link>
                </div>
                <div className={styles['card-card-form']}>
                    <div className={styles['form-card']}>
                        <h2>Já tenho cadastro</h2>
                        <form onSubmit={loginUser} className={styles.form}>
                            <div className={styles['input-texts']}>
                                <InputText
                                    name='email'
                                    id='email'
                                    label='E-mail'
                                    type={"email"}
                                />
                                <div className="password-input">
                                    <InputText
                                        name='password'
                                        id='password'
                                        label='Senha'
                                        type={"password"}
                                    />
                                </div>
                            </div>
                            <div className={styles['btn-forms']}>
                                <Buttons
                                    id='btn-In'
                                    text="Entrar"
                                />
                                <Buttons
                                    id='btn-signIn'
                                    text="Cadastrar"
                                />
                            </div>

                            <div className={styles['informations-main']}>
                                <a>Esqueci minha senha</a>
                                <div className={styles['space-between']}></div>
                                <div className={styles['share-main']}>
                                    <p>Ou entre agora com:</p>
                                    <div className={styles['img-share']}>
                                        <button className={styles['icon-share']}><FaFacebookF /></button>
                                        <button className={styles['icon-share']}><FaGoogle /></button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}