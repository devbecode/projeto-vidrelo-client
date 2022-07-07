import './styles/products.css'
import espelho from '../assets/images/produtos/espelho.svg'
import polygon from '../assets/images/icons/polygon.svg'

export default function Products() {
  return (
    <div className='container_products'>
      <div className='products_img'>
        <span className='img-box'>
          <img src={espelho} alt='' />
        </span>
      </div>
      <div className='products_body'>
        <h1 className=' products_title'>Espelhos</h1>
        <h2 className='products_subtitle'>
          Para banheiros e <span>muito</span> mais!
        </h2>
        <p className='products_description'>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt.
        </p>
        <div className='container_btn'>
        <img className='polygon' src={polygon} alt="" />
        <img className='polygon2' src={polygon} alt="" />
        <button className='products_btn'>Iniciar orçamento</button>
        </div>
        
      </div>
    </div>
  )
}
