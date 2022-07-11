import CardProducts from "./CardProducts";
import Box from '../../../assets/images/products/product-box.png'
import Espelho from '../../../assets/images/products/product-mirror.png'
import Prateleira from '../../../assets/images/products/product-prateleira.png'
import Mesa from '../../../assets/images/products/product-table.png'
import './Style/Products.scss'

import Slider from "../../Generic/Swiper/Slider";
import { SwiperProps, SwiperSlide } from "swiper/react";
import IProduct from "../../../interfaces/IProduct";
import { useEffect, useState } from "react";
import http from "../../../api";
import IGallery from "../../../interfaces/IGallery";

export default function Products() {

    const [products, setProducts] = useState<IProduct[]>([])
    
    useEffect(() => {
        fetchProducts()
    }, [])


    async function fetchProducts() {
        let res = await http.get("public/products?offset=1&limit=10")
        setProducts(res.data.products)
    }
    const settings: SwiperProps = {
        slidesPerView: 4,
        navigation: true
    }
    return (
        <section id='products'>
            <div className="products-title">
                <h4>
                    <span>Vidrelo</span>
                </h4>
                <h3>
                    Transparência na experiência, agilidade na solução
                </h3>
            </div>
            <Slider settings={settings}>
                {
                    products.map((product) => {
                        return <SwiperSlide key={product.id}>
                            <CardProducts
                                key={product.id}
                                id={product.id}
                                nameProduct={product.name}
                                descriptionProduct={product.short_description}
                            />
                        </SwiperSlide>
                    }
                    )}
            </Slider>
        </section>
    )
}

