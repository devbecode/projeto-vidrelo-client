import Footer from "../Components/LandPage/Footer/Footer"
import Forms from "../Components/Login/Forms/FormsLogIn"
import Header from "../Components/Login/Header/Header"
import "./Login.scss"
//import Content from "../Components/Login/Content/Content"

export default function Login(){
    return(
        <>
        <div className="body">
        <Header/>
        <main>
        <Forms />
         {/* <Footer/> */}
        </main>
        </div>
        </>
    )
}
