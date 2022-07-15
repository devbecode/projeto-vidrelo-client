import styles from "./Style/FormsSignIn.module.scss";
import InputText from "../../Generics/InputText/InputText";
import { FaAngleLeft } from "react-icons/fa";
import Buttons from "../../Generics/Buttons/Buttons";
import { Link } from "react-router-dom";
import { createUser } from "../../../data/hooks/createUser";
import { cepMask, telephoneMask, numberMask } from "../../Masks/Masks";
import LinkTo2 from "../../Generics/LinkTo/LinkTo2";
import stylesBtn from "../../Generics/Buttons/Style/BtnStyles.module.scss"

export default function Forms() {

    return (
        <>
            <div className={styles.main}>
                <div className={styles["arrow-card"]}>
                    <Link to="/" className={styles["link-arrow"]}>
                        <FaAngleLeft id={styles.icon} />
                    </Link>
                </div>
                <div className={styles["card-card-form"]}>
                    <div className={styles['form-card']}>
                        <h2>Quero me cadastrar</h2>
                        <form onSubmit={createUser} className={styles.form}>
                            <div className={styles['input-texts']}>
                                <div className={styles["space-between"]}>
                                    <InputText
                                        name='name'
                                        id='name'
                                        label='Nome'
                                        type={"text"}
                                    />
                                </div>
                                <div className={styles['div-half-cell']}>
                                    <div className={styles['cell']}>
                                        <InputText
                                            name='cep'
                                            id='cep'
                                            label='CEP'
                                            type={"text"}
                                            onChange={cepMask}
                                        />
                                    </div>
                                    <div className={styles['cell']}>
                                        <InputText
                                            name='telephone'
                                            id='telephone'
                                            label='Telefone'
                                            type={"text"}
                                            onChange={telephoneMask}
                                        />
                                    </div>
                                </div>
                                <div className={styles['div-half-cell']}>
                                    <div className={styles['cell']}>
                                        <InputText
                                            name='state'
                                            id='state'
                                            label='Estado'
                                            type={"text"}
                                        />
                                    </div>
                                    <div className={styles['cell']}>
                                        <InputText
                                            name='city'
                                            id='city'
                                            label='Cidade'
                                            type={"text"}
                                        />
                                    </div>
                                </div>
                                <div className={styles['div-half-cell']}>
                                    <div className={styles['cell']}>
                                        <InputText
                                            name='street'
                                            id='street'
                                            label='Rua'
                                            type={"text"}
                                        />
                                    </div>
                                    <div className={styles['cell']}>
                                        <InputText
                                            name='district'
                                            id='district'
                                            label='Bairro'
                                            type={"text"}
                                        />
                                    </div>
                                </div>
                                <div className={styles['div-half-cell']}>
                                    <div className={styles['cell']}>
                                        <InputText
                                            name='number'
                                            id='number'
                                            label='Número'
                                            type={"text"}
                                            onChange={numberMask}
                                        />
                                    </div>
                                    <div className={styles['cell']}>
                                        <InputText
                                            name='complement'
                                            id='complement'
                                            label='Complemento'
                                            type={"text"}
                                        />
                                    </div>
                                </div>
                                <div className={styles["space-between"]}>
                                    <InputText
                                        name='email'
                                        id='email'
                                        label='E-mail'
                                        type={"email"}
                                    />
                                </div>
                                <div className={styles["space-between"]}>
                                    <InputText
                                        name='password'
                                        id='password'
                                        label='Senha'
                                        type={"password"}
                                    />

                                </div>
                                <div className={styles["space-between"]}>
                                    <InputText
                                        name='confirmpassword'
                                        id='confirmpassword'
                                        label='Confirmação de senha'
                                        type={"password"}
                                    />

                                </div>
                            </div>
                            <div className={styles['btn-forms']}>
                                <LinkTo2
                                    id={stylesBtn['cancel-btn']}
                                    text="Cancelar"
                                    className={stylesBtn.btn1}
                                    path="/"
                                />
                                <Buttons
                                    id='btn-signIn'
                                    text="Cadastrar"
                                    className={stylesBtn.btn2}
                                />
                            </div>
                            <div className={styles['div-link']}>
                                <Link to="/Login">Já tenho uma conta!</Link>
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