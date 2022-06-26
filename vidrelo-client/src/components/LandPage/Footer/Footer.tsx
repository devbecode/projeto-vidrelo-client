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
                        <p>Termos de Uso</p>
                        <p>Política de privacidade</p>
                    </div>
                    <p>&copy; Vidrelo. Todos os direitos reservados</p>
                    <p>CNPJ: 23.760.933/0001-82</p>
                </div>
                <div className="social-media">
                    <FaFacebook size={34} color="#fff" />
                    <FaInstagram size={34} color="#fff" />
                </div>
            </div>
        </footer>
    )
}