import styles from './Style/FormsSignIn.module.scss';
import InputText from '../../Generics/InputText/InputText';
import { FaAngleLeft } from 'react-icons/fa';
import Buttons from '../../Generics/Buttons/Buttons';
import { Link } from 'react-router-dom';
import { createUser } from '../../../data/hooks/createUser';
import {
  cepMask,
  telephoneMask,
  numberMask,
  stateMask,
} from '../../Masks/Masks';
import LinkTo2 from '../../Generics/LinkTo/LinkTo2';
import stylesBtn from '../../Generics/Buttons/Style/BtnStyles.module.scss';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function Forms() {
  //   const [data, setData] = useState('');

  //tambem tem a errors mas n utilizei
  const { register, handleSubmit, setValue, setFocus } = useForm();

  const checkCEP = (e: React.FormEvent<HTMLInputElement>) => {
    const cep = e.currentTarget.value.replace(/\D/g, '');

    if (cep !== '') {
      fetch(`https://viacep.com.br/ws/${cep}/json/`).then((res) =>
        res.json().then((data) => {
          console.log(data);
          //   setData(data);
          setValue('street', data.logradouro);
          setValue('distric', data.bairro);
          setValue('city', data.localidade);
          setValue('uf', data.uf);
          setFocus('number');
        })
      );
    } else {
      alert('Informe um número de cep válido!');
    }
  };

  return (
    <>
      <div className={styles.main}>
        <div className={styles['arrow-card']}>
          <Link to="/" className={styles['link-arrow']}>
            <FaAngleLeft id={styles.icon} />
          </Link>
        </div>
        <div className={styles['card-card-form']}>
          <div className={styles['form-card']}>
            <h2>Quero me cadastrar</h2>
            <form className={styles.form}>
              {/* <form onSubmit={createUser} className={styles.form}> */}
              <div className={styles['input-texts']}>
                <div className={styles['space-between']}>
                  <InputText name="name" id="name" label="Nome" type={'text'} />
                </div>
                <div className={styles['div-half-cell']}>
                  <div className={styles['cell']}>
                    {/* INICIO 2222222222222222*/}

                    <InputText
                      //   name="cep"
                      {...register('cep')}
                      //   id="cep"
                      label="CEP"
                      type={'text'}
                      onChange={cepMask}
                      onBlur={checkCEP}
                    />
                  </div>
                  <div className={styles['cell']}>
                    <InputText
                      name="telephone"
                      id="telephone"
                      label="Telefone"
                      type={'text'}
                      onChange={telephoneMask}
                    />
                  </div>
                </div>
                <div className={styles['div-half-cell']}>
                  <div className={styles['cell']}>
                    <InputText
                      //   name="state"
                      {...register('uf')}
                      //   id="state"
                      label="Estado"
                      type={'text'}
                      maxLength={2}
                      onChange={stateMask}
                    />
                  </div>
                  <div className={styles['cell']}>
                    <InputText
                      //   name="city"
                      {...register('city')}
                      id="city"
                      label="Cidade"
                      type={'text'}
                    />
                  </div>
                </div>
                <div className={styles['div-half-cell']}>
                  <div className={styles['cell']}>
                    <InputText
                      //   name="street"
                      {...register('street')}
                      //   id="street"
                      label="Rua"
                      type={'text'}
                    />
                  </div>
                  <div className={styles['cell']}>
                    <InputText
                      //   name="district"
                      {...register('distric')}
                      id="district"
                      label="Bairro"
                      type={'text'}
                    />
                  </div>
                </div>
                <div className={styles['div-half-cell']}>
                  <div className={styles['cell']}>
                    <InputText
                      //   name="number"
                      {...register('number')}
                      id="number"
                      label="Número"
                      type={'text'}
                      onChange={numberMask}
                    />
                  </div>
                  <div className={styles['cell']}>
                    <InputText
                      name="complement"
                      id="complement"
                      label="Complemento"
                      type={'text'}
                    />
                  </div>
                  {/* FIM  2222222222222222222222222 */}
                </div>
                <div className={styles['space-between']}>
                  <InputText
                    name="email"
                    id="email"
                    label="E-mail"
                    type={'email'}
                  />
                </div>
                <div className={styles['space-between']}>
                  <InputText
                    name="password"
                    id="password"
                    label="Senha"
                    type={'password'}
                  />
                </div>
                <div className={styles['space-between']}>
                  <InputText
                    name="confirmpassword"
                    id="confirmpassword"
                    label="Confirmação de senha"
                    type={'password'}
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
                  id="btn-signIn"
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
        <div className={styles['space-card']}></div>
      </div>
    </>
  );
}
