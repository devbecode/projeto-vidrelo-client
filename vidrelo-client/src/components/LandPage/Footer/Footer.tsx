import logo from '../../../assets/images/illustrations/vidrelo-logo-branca.svg'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import "./Style/Footer.scss"
import "./Style/FooterResponsive.scss"
export default function Footer() {
    return (
        <footer>
            <div className="content-footer">
                <div className="img-logo">
                    <img src={logo} alt="Logo Vidrelo" />
                </div>
                <div className="copy">
                    <div className="terms">
                        <a href='#'>Termos de Uso</a>
                        <a href='#'>Política de privacidade</a>
                    </div>
                    <p>&copy; Vidrelo. Todos os direitos reservados</p>
                    <p>CNPJ: 23.760.933/0001-82</p>
                </div>
                <div className="social-media">
                    <a href='#'><FaFacebook size={34} color="#fff" /></a>
                    <a href='#'><FaInstagram size={34} color="#fff" /></a>
                </div>
            </div>
        </footer>
    )
}