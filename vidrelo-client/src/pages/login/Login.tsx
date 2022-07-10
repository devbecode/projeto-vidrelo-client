import Footer from "../../components/LandPage/Footer/Footer"
import Forms from "../../components/Login/Forms/FormsLogIn"
import Header from "../../components/Login/Header/Header"
import "./Login.scss"

export default function Login() {
    return (
        <>
            <div className="body">
                <Header />
                <main>
                    <Forms />
                    <Footer />
                </main>
            </div>
        </>
    )
}
