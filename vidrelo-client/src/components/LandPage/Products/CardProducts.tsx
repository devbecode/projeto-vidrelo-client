import { Link } from "react-router-dom"
import { SwiperSlide } from "swiper/react"
import './Style/CardProducts.scss'
export default function CardProducts(
    { nameProduct, descriptionProduct, imgProduct }: { nameProduct: string, descriptionProduct: string, imgProduct: string }
): JSX.Element {


    return (
        <div id="card-product">
            <div className="card-content">
                <div className="img-product-content">
                    <img src={imgProduct} alt={nameProduct} />
                </div>
                <div className="card-product-content">
                    <h4>{nameProduct}</h4>
                    <p>{descriptionProduct}</p>
                </div>
                <div className="btn-action">
                    <Link to="/"> Orçar </Link>
                </div>
            </div>
        </div>
    )
}