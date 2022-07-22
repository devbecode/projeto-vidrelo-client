import styles from "./Style/FormsLogIn.module.scss";
//importando os icons
import { FaFacebookF, FaAngleLeft  } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import InputText from "../../Generics/InputText/InputText";
import Buttons from "../../Generics/Buttons/Buttons"
import { loginUser } from "../../../data/hooks/loginUser";
import { Link } from "react-router-dom";
import LinkTo from "../../Generics/LinkTo/LinkTo";
import stylesBtn  from "../../Generics/Buttons/Style/BtnStyles.module.scss"
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";

export default function Forms() {

    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    // const {
    //     register,
    //     handleSubmit,
    //     reset,
    //     formState: { errors, isSubmitSuccessful },
    //   } = useForm({ defaultValues: { emailValue: "", passwordValue: ""} });

    //   console.log(errors);

    //   // const para pegar os valores do input 
    //   const changeEmail = (e: any) => {
    //     setEmail(e.target.value);
    //   };

    //   const changePassword = (e: any) => {
    //     setPassword(e.target.value);
    //   };

    //   useEffect(() => {
    //     reset({
    //         emailValue: "",
    //         passwordValue: ""
    //     });
    //   }, [isSubmitSuccessful, reset]);

    // //   const exibirErros =  Object.keys(errors).map(key => {
    // //     // console.log(key); // name
    // //     console.log(errors[key].message);
      
    // //     return (
    // //         <>
    // //         <p>{errors[key].message}</p>
    // //         </>
    // //     );
    // //   });
    // //   console.log(exibirErros);


    return (
        <>
            <div className={styles.main}>
                <div className={styles["arrow-card"]}>
                    <Link to="/" className={styles["link-arrow"]}>
                        <FaAngleLeft id={styles.icon}/> 
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
                                    // {...register("userEMail", { 
                                    //     required: true,
                                    //     minLength: { value: 2, message: "O tamanho mínimo do filme é de 2 dígitos" }})}
                                />
                                <div className={styles['error']}>
                                {/* {errors.userEMail?.type === "required" &&
                                 "É necessário informar um e-mail para continuar!"} */}
                                 erros aqui
                                </div>
                                    <InputText
                                        name='password'
                                        id='password'
                                        label='Senha'
                                        type={"password"}
                                    />
                                <div className={styles['error']}>
                                {/* {errors.userPassword?.type === "required" &&
                                 "É necessário informar uma senha para continuar!"} */}
                                 erros aqui
                                </div>
                            </div>
                            <div className={styles['btn-forms']}>
                            <Buttons
                                id={styles['btn-In']}
                                text="Entrar"
                                className={stylesBtn.btn1}
                            />
                            <LinkTo
                                id={styles['sign-In']}
                                text="Cadastrar"
                                className={stylesBtn.btn2}
                                path="/Cadastro"
                            />
                        </div>
                            <div className={styles['informations-main']}>
                                <Link to="/ForgotPassword">Esqueci minha senha</Link>
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
                <div className={styles["space-card"]}>

                </div>
            </div>

        </>
    )
}