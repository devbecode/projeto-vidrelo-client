
import Banner from "../../components/LandPage/BannerHome/BannerHome"
import Experience from "../../components/LandPage/Experience/Experience"
import Step from "../../components/LandPage/Steps/Step"
import Products from "../../components/LandPage/Products/Products"
import Header from "../../components/LandPage/Header/Header"
import Video from "../../components/LandPage/Vid/Video"
import ClientFeedback from "../../components/LandPage/ClientFeedbacks/ClientFeedback"
import Contacts from "../../components/LandPage/Contacts/Contacts"
import Footer from "../../components/LandPage/Footer/Footer"

export default function Home() {
    return (
        <>
            {/* 
            <main>
                <Banner />
                <Experience />
                <Products />
                <Video />
                <Step />
                <ClientFeedback />
                <Contacts />
                <Footer />
            </main> */}
            
            <Header />
        </>
    )
}