import Digital from "../../../assets/images/Icons/digital-icon.svg"
import Transparent from "../../../assets/images/Icons/transparent-icon.svg"
import Bestexp from "../../../assets/images/Icons/best-exp-icon.svg"
import Elo2 from "../../../assets/images/illustrations/secao1-2.svg"
import Elo3 from "../../../assets/images/illustrations/secao-2.svg"
import './Style/Experience.scss'
import './Style/ExperienceResonsive.scss'
export default function Experience() {
    return (

        <section id="experience">
            <div className="elo-left"><img src={Elo2} alt="" /></div>
            <h2>Do orçamento à instalação, com segurança e agilidade</h2>
            <div className="experience-cards">
                <div className="experience-card">
                    <div className="card-title">
                        <div className="experience-icon">
                            <img src={Digital} alt="digital" />
                        </div>
                        <h4>Digital</h4>
                    </div>
                    <p>Na nossa plataforma você pode simular digitalmente seu produto e já ter um pré-orçamento</p>
                </div>
                <div className="experience-card">
                    <div className="card-title">
                        <div className="experience-icon">
                            <img src={Transparent} alt="transparente" />
                        </div>
                        <h4>Transparente</h4>
                    </div>
                    <p>Na Vidrelo você acompanha todo o processo, recebe notificações a cada etapa e efetua o pagamento online, de forma simples e segura</p>
                </div>
                <div className="experience-card">
                    <div className="card-title">
                        <div className="experience-icon">
                            <img src={Bestexp} alt="melhor experiencia" />
                        </div>
                        <h4>Melhor experiência</h4>
                    </div>
                    <p>Pensamos em todos os detalhes para que sua experiência seja àgil, fácil e inteligente</p>
                </div>
            </div>
            <div className="elo-right"><img src={Elo3} alt="" /></div>
        </section>
    )
}