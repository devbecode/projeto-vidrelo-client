import { Link } from 'react-router-dom'
import Logo from '../../../assets/images/illustrations/logo.svg'
import Carrinho from '../../../assets/images/Icons/carrinho-icon.svg'
import './Style/Header.scss'
import { FaBars, FaUser } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import MenuMobile from './MenuMobile'
import ButtonHeaderLogged from '../../Generics/Buttons/ButtonHeaderLogged'
import Cookies from "universal-cookie";
import ModalLogged from '../Modal/Modal'
import { useModalSelector } from "../../../redux/hooks/useModalSelector"
import { useDispatch } from "react-redux";
import { setLoggedStatus } from "../../../redux/reducers/isUserLogged";

export default function Header() {
    const [showMenu, setShowMenu] = useState(false)

    const userLogged = useModalSelector((state) => state.isLogged)
    const dispatch = useDispatch();
    const changeUserLogin = (newLoginStatus: boolean) => dispatch(setLoggedStatus(newLoginStatus))
    const cookies = new Cookies()

    useEffect(() => {
        if (cookies.get('userData') && cookies.get('token')) {
            changeUserLogin(true)
        } else {
            changeUserLogin(false)
        }
    }, [cookies])

    return (
        <header>
            <div id='header-content'>
                <div className='logo'>
                    <img src={Logo} alt="Logo" id='logo' />
                </div>
                <div className={`menu-icon`} onClick={() => { setShowMenu(!showMenu); console.log(showMenu) }}>
                    <FaBars size={35} id="menu" />
                </div>
                <div className='sections-header'>
                    <nav>
                        <ul>
                            <li>
                                <Link to={"/"}>Home</Link>
                            </li>
                            <li>
                                <a href="#products">Produtos</a>
                            </li>
                            <li>
                                <a href="#video-vidrelo">Como Funciona?</a>
                            </li>
                            <li>
                                <a href="#contacts-section">Fale Conosco</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className='header-buttons'>
                    <nav >
                        <ul>
                            <li>
                                <Link className={userLogged.status ? 'disabled' : 'enabled'} to="/login">Entrar</Link>
                            </li>
                            <li>
                                <Link className={userLogged.status ? 'disabled' : 'enabled'} to="/Cadastro">Cadastrar</Link>
                            </li>
                            <li className={userLogged.status ? 'enabled' : 'disabled'}>
                                <ButtonHeaderLogged id={'genericId'}>
                                    <FaUser id='userLoggedLogo'></FaUser>
                                </ButtonHeaderLogged>
                            </li>

                            <li>
                                <Link className='btnsHeader' to="/Carrinho" ><img src={Carrinho} alt="carrinho" /></Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <MenuMobile showMenu={showMenu} setShowMenu={setShowMenu} />
            <ModalLogged />
        </header>
    )
}