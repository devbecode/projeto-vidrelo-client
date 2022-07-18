import { DetailedHTMLProps, HTMLAttributes } from "react"

interface ModalProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    status: string,
}

export default function ModalLogged({ status, ...rest }: ModalProps) {
    return (
        <div {...rest} className={status} >
            <div className="modalContainer">
                <ul>
                    <li><a href=''><span>Meu perfil</span></a></li>
                    <li><a href=''><span>Pedidos</span></a></li>
                    <li><hr /></li>
                    <li><a href=''><span>Como funciona?</span></a></li>
                    <li><a href=''><span>Fale conosco</span></a></li>
                    <li><button><span>Sair</span></button></li>
                </ul>
            </div>
        </div>
    )
}
