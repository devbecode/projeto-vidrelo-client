import { Link } from 'react-router-dom'
import Logo from '../../../assets/images/illustrations/logo.svg'
import Carrinho from '../../../assets/images/Icons/carrinho-icon.svg'
import './Style/Header.scss'
import { FaBars, FaUserShield } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import MenuMobile from './MenuMobile'
import ButtonHeaderLogged from '../../Generics/Buttons/ButtonHeaderLogged'
import UserIcon from '../../../assets/images/Icons/user-logged.svg'
import Cookies from "universal-cookie";
import { ModalLogged } from '../Modal/Modal'

export default function Header() {
    const [showMenu, setShowMenu] = useState(false)
    const [isLogged, setLoginStatus] = useState(false)
    const [isActive, setToActived] = useState(false)
    window.onload = () => {
        console.log('oi')
        const cookies = new Cookies()
        if (cookies.get('userData') && cookies.get('token')) {
            console.log('Cookies ativados')
            setLoginStatus(true)
        }
    };

    function showModal() {
        setToActived(true)
    }

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
                                <Link className={isLogged ? 'disabled' : 'enabled'} to="/login">Entrar</Link>
                            </li>
                            <li>
                                <Link className={isLogged ? 'disabled' : 'enabled'} to="/Cadastro">Cadastrar</Link>
                            </li>
                            <li className={isLogged ? 'enabled' : 'disabled'}>
                                <ButtonHeaderLogged
                                    id={'x'}
                                    onClick={showModal}
                                >
                                    {/* <img src={UserIcon} alt="user icon" id={'userLoggedLogo'} /> */}
                                    <FaUserShield id='userLoggedLogo'></FaUserShield>
                                </ButtonHeaderLogged>
                            </li>

                            <li>
                                <Link to="/Carrinho"><img src={Carrinho} alt="carrinho" /></Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <MenuMobile showMenu={showMenu} setShowMenu={setShowMenu} />
            <ModalLogged className={isActive ? 'enabled' : 'disabled'} />
        </header>
    )
}