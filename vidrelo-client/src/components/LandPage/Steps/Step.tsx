import { SwiperProps, SwiperSlide} from "swiper/react";
import Slider from "../../Generic/Swiper/Slider";
import CarouselStep from "./CarouselStep";
import "./Style/Step.scss"
//Import Images
import Step1 from '../../../assets/images/steps/step1.png'
import Step2 from '../../../assets/images/steps/step2.png'
import Step3 from '../../../assets/images/steps/step3.png'
import Step4 from '../../../assets/images/steps/step4.png'
interface Steps {
    id: number,
    number: string,
    img:string,
    title: string,
    description: string
}

const stepList: Array<Steps> = [
    {
        id: 1,
        number: '1.',
        img:Step1,
        title: "Escolha seu produto e coloque medidas aproximadas",
        description: "Após escolher o produto, você poderá adicionar medidas, escolher tipo de ferragens, cores do vidro e demais informações para compor seu orçamento simulado."
    },
    {
        id: 2,
        number: '2.',
        img:Step2,
        title: "Agende a visita do nosso medidor",
        description: "Depois da simulação pronta, é só agendar a visita técnica de um dos nossos especialistas, para confirmar as medidas e avaliar o espaço da instalação."
    },
    {
        id: 3,
        number: '3.',
        img:Step3,
        title: "Realize o pagamento e agende a instalação",
        description: "Depois de tudo conferido com o medidor, você receberá o orçamento final. Aí é so escolher o meio de pagamento para você e agendar a instalação."
    },
    {
        id: 4,
        number: '4.',
        img:Step4,
        title: "Seu produto instalado com segurança, qualidade e garantia",
        description: "Instalação agendada, é só aguardar o dia! Conte com nosso time de especialistas para uma instalação perfeita e aproveite a garantia de 1 ano da Vidrelo. A qualquer momento você pode acionar nosso atendimento para o que precisar."
    },
]


export default function Step() {
    const settings: SwiperProps = {
        slidesPerView:1,
        navigation:true,
        pagination:{
            clickable:true,
        }
    }
    return (
        <>
            <section id='step'>
                <div className="step-content">
                    <h3>Tudo pronto em <span>4 passos</span></h3>
                    <Slider settings={settings}>
                        {
                            stepList.map((steps) => {
                                if(steps.id === 1){
                                    
                                }
                                else if(steps.id ===4){

                                }
                                return <SwiperSlide>
                                    <CarouselStep
                                        key={steps.id}
                                        numberStep={steps.number}
                                        imgStep={steps.img}
                                        titleStep={steps.title}
                                        descriptionStep={steps.description}
                                    />
                                </SwiperSlide>
                            })}
                    </Slider>

                </div>
            </section>
        </>
    )
}