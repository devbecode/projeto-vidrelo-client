import CardProducts from "./CardProducts";
import Box from '../../../assets/images/products/product-box.png'
import Espelho from '../../../assets/images/products/product-mirror.png'
import Prateleira from '../../../assets/images/products/product-prateleira.png'
import Mesa from '../../../assets/images/products/product-table.png'

import './Style/Products.scss'

interface Products {
    id: number,
    img: string,
    name: string,
    description: string

}
//Mock 
const productList: Array<Products> = [
    {
        id: 1,
        img: Box,
        name: "Box",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nulla massa, accumsan id lacus nec, sagittis aliquet lacus... ver mais"
    },
    {
        id: 2,
        img: Espelho,
        name: "Espelho",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nulla massa, accumsan id lacus nec, sagittis aliquet lacus... ver mais"
    },
    {
        id: 3,
        img: Prateleira,
        name: "Prateleira",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nulla massa, accumsan id lacus nec, sagittis aliquet lacus... ver mais"
    },
    {
        id: 4,
        img: Mesa,
        name: "Mesas",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nulla massa, accumsan id lacus nec, sagittis aliquet lacus... ver mais"
    }

]

export default function Products() {
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
            <div className="products-carousel-content">
                {
                    productList.map((product) => {
                        return <CardProducts
                            key={product.id}
                            imgProduct={product.img}
                            nameProduct={product.name}
                            descriptionProduct={product.description}
                        />
                    }
                    )}
            </div>
        </section>
    )
}