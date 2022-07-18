import { FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from '../../../assets/images/illustrations/vidrelo-logo-branca.svg'
import Carrinho from '../../../assets/images/Icons/carrinho-icon.svg'
import './Style/MenuMobile.scss'
export default function MenuMobile({ showMenu, setShowMenu }: { showMenu: Boolean, setShowMenu: React.Dispatch<React.SetStateAction<boolean>>; }) {
    return (
        <div id='menu-mobile' className={`${showMenu ? "active" : "inative"}`}>
            <div className='container-img'>
                <FaAngleLeft size={42} color={"white"} id='back' onClick={() => { setShowMenu(!showMenu); }} />
                <img src={Logo} alt="Logo" id='logo' />
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="#banner-event" onClick={() => { setShowMenu(!showMenu); }}>Home</a>
                    </li>
                    <li>
                        <a href="#products" onClick={() => { setShowMenu(!showMenu); }}>Produtos</a>
                    </li>
                    <li>
                        <a href="#step" onClick={() => { setShowMenu(!showMenu); }}>Como Funciona?</a>
                    </li>
                    <li>
                        <a href="#contacts-section" onClick={() => { setShowMenu(!showMenu); }}>Fale Conosco</a>
                    </li>
                    <li>
                        <Link className="btn-menu" to="/login" onClick={() => { setShowMenu(!showMenu); }}>Entrar</Link>
                    </li>
                    <li>
                        <Link className="btn-menu" to="/cadastro" onClick={() => { setShowMenu(!showMenu); }}>Cadastrar</Link>
                    </li>
                    <li>
                        <Link className="btn-menu" to="/Carrinho"><img src={Carrinho} alt="carrinho" /></Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
