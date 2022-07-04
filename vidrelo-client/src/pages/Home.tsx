
import Banner from "../components/LandPage/BannerHome/BannerHome"
import Experience from "../components/LandPage/Experience/Experience"
import Step from "../components/LandPage/Steps/Step"
import Products from "../components/LandPage/Products/Products"
import Header from "../components/LandPage/Header/Header"
export default function Home(){
    return(
        <>
           <Header/>
           <main>
            <Banner/>
            <Experience/>
            <Products/>
           </main>
           
        </>
    )
}