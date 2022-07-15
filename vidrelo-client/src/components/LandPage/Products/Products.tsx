import CardProducts from "./CardProducts";
import Box from "../../../assets/images/products/product-box.png";
import Espelho from "../../../assets/images/products/product-mirror.png";
import Prateleira from "../../../assets/images/products/product-prateleira.png";
import Mesa from "../../../assets/images/products/product-table.png";
import "./Style/Products.scss";
import Slider from "../../Generic/Swiper/Slider";
import { SwiperProps, SwiperSlide } from "swiper/react";

interface Products {
  id: number;
  img: string;
  name: string;
  description: string;
  readMore: string;
}

//Mock
const productList: Array<Products> = [
  {
    id: 1,
    img: Box,
    name: "Box",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nulla massa, accumsan id lacus nec, sagittis aliquet lacus... ",
    readMore: "Detalhes-produto",
  },
  {
    id: 2,
    img: Espelho,
    name: "Espelho",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nulla massa, accumsan id lacus nec, sagittis aliquet lacus... ",
    readMore: "Detalhes-produto",
  },
  {
    id: 3,
    img: Prateleira,
    name: "Prateleira",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nulla massa, accumsan id lacus nec, sagittis aliquet lacus... ",
    readMore: "Detalhes-produto",
  },
  {
    id: 4,
    img: Mesa,
    name: "Mesas",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nulla massa, accumsan id lacus nec, sagittis aliquet lacus... ",
    readMore: "Detalhes-produto",
  },
  {
    id: 5,
    img: Mesa,
    name: "Mesas",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nulla massa, accumsan id lacus nec, sagittis aliquet lacus... ",
    readMore: "Detalhes-produto",
  },
];

export default function Products() {
  const settings: SwiperProps = {
    slidesPerView: 4,
    navigation: true,
  };
  return (
    <section id="products">
      <div className="products-title">
        <h4>
          <span>Vidrelo</span>
        </h4>
        <h3>Transparência na experiência, agilidade na solução</h3>
      </div>
      <Slider settings={settings}>
        {productList.map((product) => {
          return (
            <SwiperSlide>
              <CardProducts
                key={product.id}
                imgProduct={product.img}
                nameProduct={product.name}
                descriptionProduct={product.description}
                readMore={product.readMore}
              />
            </SwiperSlide>
          );
        })}
      </Slider>
    </section>
  );
}
