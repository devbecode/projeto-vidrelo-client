import { FaWhatsapp } from "react-icons/fa";
import "./Style/Contacts.scss"
import "./Style/ContactsResponsive.scss"
export default function Contacts() {
    return (
        <section id="contacts-section">
            <div className="contacts-content">
                <h3>Quer falar com a gente? <span>Entre em contato!</span></h3>
                <div className="service-time">
                    <p>Horário de atendimento:</p>
                    <p>Segunda a Sexta - 09h às 18h</p>
                    <p>Sábado - 09h às 12h</p>
                </div>
                <div className="contact-action">
                    <a className="call-button" href="#">Ligue agora: (81) 4042-0876</a>
                    <a className="wpp-button" href="#">
                        <FaWhatsapp className="icon-wpp" size={27} color="#fff"/>
                        Fale pelo Whatsapp</a>
                </div>
            </div>
        </section>
    )
}