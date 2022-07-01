import styles from "../../Login/Forms/Style/FormsLogIn.module.scss";
// a parte responsiva nao esta funcionando
//importando os icons
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
//
import InputText from "../../Generics/InputText/InputText";
//import FormCard from "../../Generics/FormCard/FormCard";
import Buttons from "../../Generics/Buttons/Buttons";

export default function Forms(){


    const handleSubmit = (e: any) => {
        e.preventDefault();
    }

    return(
        <>
         <div className={styles.main}>
         <div className={styles['form-card']}>
         <h2>Já tenho cadastro</h2>
         <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles['input-texts']}>
            <InputText
            name = 'email'
            id='email'
            label='E-mail'
            type={"email"}
            />
            <InputText
            name = 'password'
            id='password'
            label='Senha'
            type={"password"}
            />
            </div>
            <div className={styles['btn-forms']}>
                <Buttons 
                id= 'btn-In'
                text="Entrar"
                />
                <Buttons 
                id= 'btn-signIn'
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
        </>
    )
}