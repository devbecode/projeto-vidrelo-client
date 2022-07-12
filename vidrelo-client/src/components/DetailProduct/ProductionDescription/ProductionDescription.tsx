import './style/productionDescription.scss'

import espelho from '../../../assets/images/produtos/espelho.svg'
import polygon from '../../../assets/images/icons/polygon.svg'

export default function Description() {
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
            <button className='product_btn'>Iniciar orçamento</button>
          </div>
        </div>
      </section>

      <section className='img_elo'></section>
    </>
  )
}
