import ClientFeedback from "../components/LandPage/ClientFeedbacks/ClientFeedback"
import Contacts from "../components/LandPage/Contacts/Contacts"
import Footer from "../components/LandPage/Footer/Footer"
import Header from "../components/LandPage/Header/Header"
import Step from "../components/LandPage/Steps/Step"
export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Step />
                <ClientFeedback />
                <Contacts />
            </main>
            <Footer />
        </>
    )
}