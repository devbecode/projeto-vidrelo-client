import CardClientFeedback from "./CardClientFeedback";
import "./Style/ClientFeedback.scss"
import "./Style/ClientFeedbackResponsive.scss"

export default function ClientFeedback() {

    interface ClientFeedback {
        id: number,
        name: string,
        profession: string,
        message: string
    }
    const clientFeedbackList: Array<ClientFeedback> = [
        {
            id: 1,
            name: "Guilherme Dias",
            profession: "Empresário",
            message: "\"Minha experiência foi sensacional. Gostei muito do atendimento, da praticidade e da velocidade com que fui atendido. Tive um bom tempo de resposta, a instalação dos meus boxes foi perfeita e rápida.\"",
        },
        {
            id: 2,
            name: "Sheila de Lima",
            profession: "Economista",
            message: "\"Sou muito prática, precisava de uma solução rápida para a reforma da minha filha. Encontrei o site e resolvi ligar. Como fui muito bem atendida, rapidamente já marcamos a instalação.\""
        },
        {
            id: 3,
            name: "Paulo Times",
            profession: "Funcionário Público",
            message: "\"Gostaria de destacar a plena satisfação com os serviços da Vidrelo, que teve um bom atendimento inicial e, o mais importante, um bom pós venda, tendo instalado o espelho da forma solicitada.\""
        }
    ]

    return (
        <>
            <section id='client-feedback'>
                <div className="client-feedback-content">
                    <h3>O que nossos clientes falam sobre nós</h3>
                    <div className="cards-feedback">
                        {
                            clientFeedbackList.map((item, _) => {
                                return <CardClientFeedback
                                    key={item.id}
                                    nameClient={item.name}
                                    profession={item.profession}
                                    message={item.message}
                                />
                            })
                        }
                    </div>
                    <h2>O elo que <span>agiliza e descomplica.</span></h2>
                </div>
            </section>
        </>
    )
}