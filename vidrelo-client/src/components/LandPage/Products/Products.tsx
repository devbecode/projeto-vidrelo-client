import CardProducts from "./CardProducts";
import './Style/Products.scss'
interface Products {
    id: number,
    img: string,
    name: String,
    description: String

}
//Mock 
const productList: Array<Products> = [
    {
        id: 1,
        img: "../../../assets/images/products/product-box.png",
        name: "Box",
        description: "lorem"
    },
    {
        id: 2,
        img: "../../../assets/images/products/product-mirror.png",
        name: "Espelho",
        description: "Lore"
    },
    {
        id: 3,
        img: "../../../assets/images/products/product-prateleira.png",
        name: "Prateleiras",
        description: "lorem"
    },
    {
        id: 4,
        img: "../../../assets/images/products/product-table.png",
        name: "Mesas",
        description: "lorem"
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
                <div className="cards-products">
                    {
                        productList.map((product, _) => {
                            return <CardProducts
                                key={product.id}
                                imgProduct={product.img}
                                nameProduct={product.name}
                                descriptionProduct={product.description}
                            />
                        }
                        )}
                </div>
            </div>
        </section>
    )
}