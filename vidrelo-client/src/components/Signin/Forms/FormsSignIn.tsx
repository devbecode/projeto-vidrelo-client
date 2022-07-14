import styles from "../../Signin/Forms/Style/FormsSignIn.module.scss";
import InputText from "../../Generics/InputText/InputText";
import Buttons from "../../Generics/Buttons/Buttons";

export default function Forms() {

    const handleSubmit = (e: any) => {
        e.preventDefault();
    }

    // const [ImgPass, setImgPass] = useState(false);
    // const [ImgConfirm, setImgConfirm] = useState(false);

    // const toggleBtn = () => {

    //     setImgPass(prevState => !prevState)
    // }
    // const toggleBtnConfirm = () => {
    //     setImgConfirm(prevState => !prevState)
    // }

    return (
        <>
            <div className={styles.main}>
                <div className={styles['form-card']}>
                    <h2>Quero me cadastrar</h2>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles['input-texts']}>
                            <InputText
                                name='name'
                                id='name'
                                label='Nome'
                                type={"text"}
                            />
                            <div className={styles['div-cpf-cell']}>
                                <div className={styles['cpf-cell']}>
                                    <InputText
                                        name='cpf'
                                        id='cpf'
                                        label='CPF'
                                        type={"number"}
                                    />
                                </div>
                                <div className={styles['phone-cell']}>
                                    <InputText
                                        name='phone'
                                        id='phone'
                                        label='Telefone'
                                        type={"number"}
                                    />
                                </div>
                            </div>
                            <InputText
                                name='email'
                                id='email'
                                label='E-mail'
                                type={"email"}
                            />
                            <div className="btn-input-eye">
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