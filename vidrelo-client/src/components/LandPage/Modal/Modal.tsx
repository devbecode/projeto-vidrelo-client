import { HTMLAttributes } from "react"

interface ModalProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    classNameModal: string,
}

export default function ModalLogged(classNameModal: ModalProps) {
    console.log('modal clicado!')
    return (
        <div className={classNameModal} >
            <div className="modalContainer">
                <ul>
                    <li>Meu perfil</li>
                    <li>Pedidos</li>
                    <li><hr /></li>
                    <li>Como funciona?</li>
                    <li>Fale conosco</li>
                    <li>Sair</li>
                </ul>
            </div>
        </div >
    )
}
