import { Link, useNavigate } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import "./Style/CardProducts.scss";

export default function CardProducts({
  nameProduct,
  descriptionProduct,
  imgProduct,
  readMore,
}: {
  nameProduct: string;
  descriptionProduct: string;
  imgProduct: string;
  readMore: string;
}): 
JSX.Element {
    //Com o useNavigate
//   const navigate = useNavigate();
//     function readMore() {
//         navigate('Detalhes-produto')
//     }
  return (
    <div id="card-product">
      <div className="card-content">
        <div className="img-product-content">
          <img src={imgProduct} alt={nameProduct} />
        </div>
        <div className="card-product-content">
          <h4>{nameProduct}</h4>
          <p>
            {descriptionProduct}
         {/* Com o Link */}
            <Link to={readMore}>ver mais</Link>
            {/* <span> <button onClick={readMore}>ver mais</button></span> */}
          </p> 

        </div>
        <div className="btn-action">
          <Link to="/" > Orçar </Link>
        </div>
      </div>
    </div>
  );
}
