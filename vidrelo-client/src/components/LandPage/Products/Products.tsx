import CardProducts from "./CardProducts";
import Box from '../../../assets/images/products/product-box.png'
import Espelho from '../../../assets/images/products/product-mirror.png'
import Prateleira from '../../../assets/images/products/product-prateleira.png'
import Mesa from '../../../assets/images/products/product-table.png'
import Elo3 from '../../../assets/images/illustrations/secao-3.svg'
import './Style/Products.scss'

import Slider from "../../Generics/Swiper/Slider";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
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
        navigation: {
            enabled: true,
            prevEl: "#button-prev",
            nextEl: "#button-next"
        },
        breakpoints: {
            // when window width is >= 320px
            200: {
                slidesPerView: 1,
                navigation: {
                    enabled: false,
                    prevEl: "#button-prev",
                    nextEl: "#button-next"
                },
            },
            320: {
                slidesPerView: 1,
                navigation: {
                    enabled: false,
                    prevEl: "#button-prev",
                    nextEl: "#button-next"
                },
            },
            600: {
                slidesPerView: 1,
                navigation: {
                    enabled: false,
                    prevEl: "#button-prev",
                    nextEl: "#button-next"
                },
            },
            1024: {
                slidesPerView: 2,
                navigation: {
                    enabled: false,
                    prevEl: "#button-prev",
                    nextEl: "#button-next"
                },
            },
            1200: {
                slidesPerView: 4,
                navigation: {
                    enabled: true,
                    prevEl: "#button-prev",
                    nextEl: "#button-next"
                },
            },
            1920: {
                slidesPerView: 4,
                navigation: {
                    enabled: true,
                    prevEl: "#button-prev",
                    nextEl: "#button-next"
                },
            }
        }
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
            {/* <div className="elo-products">
                <img src={Elo3} alt="" />
            </div> */}
            <div className="products-carousel">
                <div id="button-prev" className="swiper-button-prev" ></div>
                <Slider settings={settings}>
                    {
                        productList.map((product) => {
                            return <SwiperSlide
                                key={product.id}>
                                <CardProducts
                                    imgProduct={product.img}
                                    nameProduct={product.name}
                                    descriptionProduct={product.description}
                                />
                            </SwiperSlide>
                        }
                        )}
                </Slider>
                <div id="button-next" className="swiper-button-next"></div>
            </div>
        </section>
    )
}
