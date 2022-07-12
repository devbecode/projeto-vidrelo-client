import styles from "./Style/FormsSignIn.module.scss";
import InputText from "../../Generics/InputText/InputText";
import {FaArrowLeft } from "react-icons/fa";
import Buttons from "../../Generics/Buttons/Buttons";
import { Link } from "react-router-dom";
import { useState } from "react";
//import { axios} from "axios";

export default function Forms(){

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log("teste");
        
    }


    return(
        <>
         <div className={styles.main}>
            <Link  to="/" className={styles["link-arrow"]}>
            <FaArrowLeft /> 
            </Link>
         <div className={styles['form-card']}>
         <h2>Quero me cadastrar</h2>
         <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles['input-texts']}>
            <div className={styles["space-between"]}>
            <InputText
            name = 'name'
            id='name'
            label='Nome'
            type={"text"}
            />
            </div>
            <div className={styles['div-half-cell']}>
                <div className={styles['cell']}>
                <InputText
                name = 'cep'
                id='cep'
                label='CEP'
                type={"number"}
                />
                </div>
                <div className={styles['cell']}>
                <InputText
                name = 'telephone'
                id='telephone'
                label='Telefone'
                type={"number"}
                />
                </div>
            </div>
            <div className={styles['div-half-cell']}>
                <div className={styles['cell']}>
                <InputText
                name = 'state'
                id='state'
                label='Estado'
                type={"text"}
                />
                </div>
                <div className={styles['cell']}>
                <InputText
                name = 'city'
                id='city'
                label='Cidade'
                type={"text"}
                />
                </div>
            </div>
            <div className={styles['div-half-cell']}>
                <div className={styles['cell']}>
                <InputText
                name = 'street'
                id='street'
                label='Rua'
                type={"text"}
                />
                </div>
                <div className={styles['cell']}>
                <InputText
                name = 'district'
                id='district'
                label='Bairro'
                type={"text"}
                />
                </div>
            </div>
            <div className={styles['div-half-cell']}>
                <div className={styles['cell']}>
                <InputText
                name = 'number'
                id='number'
                label='Número'
                type={"number"}
                />
                </div>
                <div className={styles['cell']}>
                <InputText
                name = 'complement'
                id='complement'
                label='Complemento'
                type={"text"}
                />
                </div>
            </div>
            <div className={styles["space-between"]}>
            <InputText
                name = 'email'
                id='email'
                label='E-mail'
                type={"email"}
                />
                </div>
            <div className={styles["space-between"]}>
            <InputText
                name = 'password'
                id='password'
                label='Senha'
                type={"password"}
                />
              
                </div>
                <div className={styles["space-between"]}>
            <InputText
                name = 'confirmpassword'
                id='confirmpassword'
                label='Confirmação de senha'
                type={"password"}
                />
               
                </div>
            </div>
            <div className={styles['btn-forms']}>
                <Buttons 
                id= 'btn-Cancel'
                text="Cancelar"
                />
                <Buttons 
                id= 'btn-signIn'
                text="Cadastrar"
                />
            </div>
            <div className={styles['div-link']}>
            <Link to="/Login">Já tenho uma conta!</Link>
            </div>
         </form>
        </div>
         </div>
        </>
    )
}