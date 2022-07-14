import { Link } from 'react-router-dom'
import Logo from '../../../assets/images/illustrations/logo.svg'
import Carrinho from '../../../assets/images/Icons/carrinho-icon.svg'
import './Style/Header.scss'
export default function Header() {
    return (
        <header>
            <div id='header-content'>
                <div className='logo'>
                    <img src={Logo} alt="Logo" id='logo' />
                </div>
                <div className='sections-header'>
                    <nav>
                        <ul>
                            <li>
                                <a href="/">Home</a>
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
                                <Link to="/login">Entrar</Link>
                            </li>
                            <li>
                                <Link to="/Cadastro">Cadastrar</Link>
                            </li>

                            <li>
                                <Link to="/Carrinho"><img src={Carrinho} alt="carrinho" /></Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}