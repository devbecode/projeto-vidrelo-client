import { useModalSelector } from "../../../redux/hooks/useModalSelector"
import { useDispatch } from "react-redux";
import { ButtonHTMLAttributes, InputHTMLAttributes } from "react"
import { setStatus } from "../../../redux/reducers/activeModal";
import "./Style/Buttons.scss"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    id: any,
}

export default function ButtonHeaderLogged({ id, ...rest }: ButtonProps) {
    const statusModal = useModalSelector((state) => state.activeModal)
    const dispatch = useDispatch();
    const changeStatus = (newModalStatus: boolean) => dispatch(setStatus(newModalStatus))

    const showModal = () => {
        if (statusModal.status) {
            changeStatus(false)
        } else {
            changeStatus(true)
        }
    }

    return (
        <>
            <button {...rest} id={id} onClick={showModal}></button>
        </>
    )
}