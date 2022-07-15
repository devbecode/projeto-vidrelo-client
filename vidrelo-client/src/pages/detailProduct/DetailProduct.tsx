import ProductDescription from "../../components/DetailProduct/ProductionDescription/ProductionDescription";
import ProductInformation from "../../components/DetailProduct/ProductionInformation/ProductionInformation";
import BannerProductionDetail from "../../components/DetailProduct/BannerProductionDetail/BannerProductionDetail";
import Header from "../../components/LandPage/Header/Header";
import Contacts from "../../components/LandPage/Contacts/Contacts";
import Footer from "../../components/LandPage/Footer/Footer";
import GoToTop from "../../components/Generics/GoToTop/GoToTop";
export default function DetailProduct() {
  return (
    <>
      {/* <section className="container-productdetail">
        <Header />
        <ProductDescription />
        <ProductInformation />
        <BannerProductionDetail />
        <Contacts/>
        <Footer/>
      </section> */}

      <main>
        <Header />
        <ProductDescription />
        <ProductInformation />
        <BannerProductionDetail />
        <Contacts />
        <Footer />
        {/* <GoToTop /> */}
      </main>
    </>
  );
}
