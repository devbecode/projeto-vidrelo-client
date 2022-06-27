import { Link } from "react-router-dom"
import './Style/CardProducts.scss'
export default function CardProducts(
    { nameProduct, descriptionProduct, imgProduct }: { nameProduct: String, descriptionProduct: String, imgProduct: string }
) {


    return (
        <>
            <div id="card-product">
                <div className="card-content">
                    <div className="image-product-content">
                        <img src={imgProduct} alt="produto" />
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
        </>
    )
}