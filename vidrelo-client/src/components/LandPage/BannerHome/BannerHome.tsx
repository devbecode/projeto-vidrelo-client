import { Link } from 'react-router-dom'
import  ImgBanner from '../../../assets/images/illustrations/img-com-ondinhas.svg'
import Elo from '../../../assets/images/illustrations/secao1-1.svg'
import './Style/BannerHome.scss'
export default function Banner(){
    return(
        <section id='banner-home'>
            <div id='banner-content-home'>
                <div className='banner-content-action'>
                    <h1>O elo entre </h1>
                    <h1> o <span>vidro e você!</span></h1>
                    <p>Uma plataforma inteligente para quem busca<br></br> vidros e espelhos de forma simples, rápida,<br></br>segura e que cuida de tudo pra você.</p>     
                    <Link to={"/"}> Simular Orçamento </Link>
                </div>
                <div className='banner-content-img'>
                    <img src={ImgBanner} alt="imagem banner" />
                </div>     
           </div>
        </section>
    )
}