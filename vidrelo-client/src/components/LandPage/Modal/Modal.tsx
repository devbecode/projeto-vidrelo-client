import { useModalSelector } from "../../../redux/hooks/useModalSelector"
import { useDispatch } from "react-redux";
import { setStatus } from "../../../redux/reducers/activeModal";
import { setLoggedStatus } from "../../../redux/reducers/isUserLogged";
import Cookies from "universal-cookie";

export default function ModalLogged() {
    const statusModal = useModalSelector((state) => state.activeModal)
    const userLogged = useModalSelector((state) => state.isLogged)
    const dispatch = useDispatch();
    const changeStatus = (newModalStatus: boolean) => dispatch(setStatus(newModalStatus))
    const changeUserLogin = (newLoginStatus: boolean) => dispatch(setLoggedStatus(newLoginStatus))
    const cookies = new Cookies();

    const logOut = () => {
        if (cookies.get('userData')) {
            cookies.remove('userData')
        }
        if (cookies.get('token')) {
            cookies.remove('token')
        }
        changeStatus(false)
        changeUserLogin(false)
    }
    return (
        <div className={statusModal.status ? "enabled modalFather" : "disabled"} >
            <div className="modalContainer">
                <ul>
                    <li><a href=''><span>Meu perfil</span></a></li>
                    <li><a href=''><span>Pedidos</span></a></li>
                    <li><hr /></li>
                    <li><a href=''><span>Como funciona?</span></a></li>
                    <li><a href=''><span>Fale conosco</span></a></li>
                    <li>
                        <button onClick={logOut}>
                            <span>Sair</span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}
