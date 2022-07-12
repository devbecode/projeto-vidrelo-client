import styles from "../../Signin/Forms/Style/FormsSignIn.module.scss";
import InputText from "../../Generics/InputText/InputText";
import Buttons from "../../Generics/Buttons/Buttons";
import { Usefetch } from "../../../data/hooks/createUser";
export default function Forms() {

    return (
        <>
            <div className={styles.main}>
                <div className={styles['form-card']}>
                    <h2>Quero me cadastrar</h2>
                    <form onSubmit={Usefetch} className={styles.form}>
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
                                        name='cpf'
                                        id='cpf'
                                        label='CPF'
                                        type={"number"}
                                    />
                                </div>
                                <div className={styles['cell']}>
                                    <InputText
                                        name='phone'
                                        id='phone'
                                        label='Telefone'
                                        type={"number"}
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
                                        type={"number"}
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
                                {/* type={ImgConfirm ? "text" : "password"} 
                <button className="btn-input-eye" onClick={toggleBtn}>
                {ImgPass ? 
                <FaEyeSlash/> :
                <FaEye/>
                }
                </button> */}
                            </div>
                            <div className={styles["space-between"]}>
                                <InputText
                                    name='confirmpassword'
                                    id='confirmpassword'
                                    label='Confirmação de senha'
                                    type={"password"}
                                />
                                {/* type={ImgConfirm ? "text" : "password"}
                 <button className="btn-input-eye" onClick={toggleBtnConfirm}>
                {ImgConfirm ? 
                <FaEyeSlash/> :
                <FaEye/>
                }
                </button> */}
                            </div>
                        </div>
                        <div className={styles['btn-forms']}>
                            <Buttons
                                id='btn-Cancel'
                                text="Cancelar"
                            />
                            <Buttons
                                id='btn-signIn'
                                text="Cadastrar"
                            />
                        </div>
                        <div className={styles['div-link']}>
                            <a>Já tenho uma conta!</a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}