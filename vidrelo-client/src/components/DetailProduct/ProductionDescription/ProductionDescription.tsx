import './style/productionDescription.scss'
import espelho from '../../../assets/images/products/espelho.svg'
import polygon from '../../../assets/images/Icons/polygon.svg'
import { useNavigate, Link } from 'react-router-dom';

export default function Description() {
//useNavigate
  // const navigate = useNavigate();
  // function checkPrice() {
  //     navigate('/')
  // }
  return (
    <>
      <section className='container_product'>
        <div className='product_img'>
          <img src={espelho} alt='' />
        </div>
        <div className='product_body'>
          <h1 className=' product_title'>Espelhos</h1>
          <h2 className='product_subtitle'>
            Para banheiros e <span>muito</span> mais!
          </h2>
          <p className='product_description'>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt.
          </p>
          <div className='container_btn'>
            <img className='polygon' src={polygon} alt='' />
            <img className='polygon2' src={polygon} alt='' />
            {/* useNavigate 
            <button className='product_btn' onClick={checkPrice}>Iniciar orçamento</button> */}
            <Link to='/' ><button className='product_btn'>Iniciar Orçamento</button></Link> 
          </div>
        </div>
      </section>

      <section className='img_elo'></section>
    </>
  )
}
