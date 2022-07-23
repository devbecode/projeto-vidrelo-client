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
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface IFormInputs {
  profile: string;
  name: string;
  email: string;
  password: any;
  telephone: number;
  cep: number;
  state: string;
  city: string;
  district: string;
  street: string;
  number: number;
  complement: string;
  uf: string;
  label: string;
}
const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(4).max(20).required(),
});

export default function Forms() {
  //   const [data, setData] = useState('');

  //tambem tem a errors mas n utilizei
  const { register, handleSubmit, setValue, setFocus } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const checkCEP = (e: React.FormEvent<HTMLInputElement>) => {
    const cep = e.currentTarget.value.replace(/\D/g, '');

    if (cep !== '') {
      fetch(`https://viacep.com.br/ws/${cep}/json/`).then((res) =>
        res.json().then((data) => {
          console.log(data);
          //   setData(data);
          setValue('street', data.logradouro);
          setValue('district', data.bairro);
          setValue('city', data.localidade);
          setValue('uf', data.uf);
          setFocus('number');
        })
      );
    } else {
      alert('Informe um número de cep válido!');
    }
  };

  const formSubmitHandler: SubmitHandler<IFormInputs> = (data: IFormInputs) => {
    console.log('form data is', data);
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
            <form
              onSubmit={handleSubmit(formSubmitHandler)}
              className={styles.form}
            >
              {/* <form onSubmit={createUser} className={styles.form}> */}
              <div className={styles['input-texts']}>
                <div className={styles['space-between']}>
                  <div className="input-part">
                    <label htmlFor="name">Name</label>
                    <input name="name" id="name" type={'text'} />
                  </div>
                </div>
                <div className={styles['div-half-cell']}>
                  <div className={styles['cell']}>
                    {/* INICIO 2222222222222222*/}

                    <div className="input-part">
                      <label htmlFor="cep">CEP</label>
                      <input name="cep" id="cep" type={'text'} />
                    </div>
                  </div>
                  <div className={styles['cell']}>
                    <div className="input-part">
                      <label htmlFor="telephone">Telefone</label>
                      <input name="telephone" id="telephone" type={'text'} />
                    </div>
                  </div>
                </div>
                <div className={styles['div-half-cell']}>
                  <div className={styles['cell']}>
                    <div className="input-part">
                      <label htmlFor="state">Estado</label>
                      <input name="state" id="state" type={'text'} />
                    </div>
                  </div>
                  <div className={styles['cell']}>
                    <div className="input-part">
                      <label htmlFor="city">Cidade</label>
                      <input name="city" id="city" type={'text'} />
                    </div>
                  </div>
                </div>
                <div className={styles['div-half-cell']}>
                  <div className={styles['cell']}>
                    <div className="input-part">
                      <label htmlFor="street">Rua</label>
                      <input name="street" id="street" type={'text'} />
                    </div>
                  </div>
                  <div className={styles['cell']}>
                    <div className="input-part">
                      <label htmlFor="district">Bairro</label>
                      <input name="district" id="district" type={'text'} />
                    </div>
                  </div>
                </div>
                <div className={styles['div-half-cell']}>
                  <div className={styles['cell']}>
                    <div className="input-part">
                      <label htmlFor="number">Número</label>
                      <input name="number" id="number" type={'text'} />
                    </div>
                  </div>
                  <div className={styles['cell']}>
                    <div className="input-part">
                      <label htmlFor="complement">Complemento</label>
                      <input name="complement" id="complement" type={'text'} />
                    </div>
                  </div>
                  {/* FIM  2222222222222222222222222 */}
                </div>
                <div className={styles['space-between']}>
                  <div className="input-part">
                    <label htmlFor="email">E-mail</label>
                    <input name="email" id="email" type={'email'} />
                  </div>
                </div>
                <div className={styles['space-between']}>
                  <div className="input-part">
                    <label htmlFor="password">Senha</label>
                    <input name="password" id="password" type={'password'} />
                  </div>
                </div>
                <div className={styles['space-between']}>
                  <div className="input-part">
                    <label htmlFor="confirmpassword">
                      Confirmação de Senha
                    </label>
                    <input
                      name="confirmpassword"
                      id="confirmpassword"
                      type={'password'}
                    />
                  </div>
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
