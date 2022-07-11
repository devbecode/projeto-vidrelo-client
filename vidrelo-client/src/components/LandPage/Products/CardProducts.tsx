import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { SwiperSlide } from "swiper/react"
import http from "../../../api"
import IGallery from "../../../interfaces/IGallery"

import './Style/CardProducts.scss'

export default function CardProducts(
    { id, nameProduct, descriptionProduct }: { id: string, nameProduct: string, descriptionProduct: string }
): JSX.Element {
    const [gallery, setGallery] = useState<IGallery[]>([])
    async function fetchProductsById(id: String) {
        let res = await http.get(`/product/${id}`)
        setGallery(res.data.gallery)
    }
    useEffect(() => {
        fetchProductsById(id)
    }, [])

    return (
        <div id="card-product">
            <div className="card-content">
                <div className="img-product-content">
                    <img src={gallery.map(image =>{return image.image})[0]} alt={nameProduct} />
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