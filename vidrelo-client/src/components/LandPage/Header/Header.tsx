import { Link } from 'react-router-dom'
import Logo from '../../../assets/images/illustrations/logo.svg'
import Carrinho from '../../../assets/images/Icons/carrinho-icon.svg'
import './Style/Header.scss'
export default function Header(){
    return(
        <header>
            
            <div id='header-content'>
                <img src={Logo} alt="Logo" id='logo' />
                <nav>
                    <ul>
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#produtos">Produtos</a>
                        </li>
                        <li>
                            <a href="#como-funciona">Como Funciona?</a>
                        </li>
                        <li>
                            <a href="#fale-conosco">Fale Conosco</a>
                        </li>         
                    </ul>
                </nav>
                <nav className='nav-buttons'>    
                    <ul>
                        <li>
                            <Link  to="/login">Entrar</Link>           
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

        </header>
    )
}