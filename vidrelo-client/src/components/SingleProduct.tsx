import './styles/singleProduct.scss'
import bg from '../assets/images/bg/bgelo.svg'
import espelho from '../assets/images/produtos/espelho.svg'
import polygon from '../assets/images/icons/polygon.svg'
import wpicon from '../assets/images/icons/wpicon.svg'

export default function SingleProducts() {
  return (
    <>
      <section className='container_products'>
        <div className='products_img'>
          <img src={espelho} alt='' />
        </div>
        <div className='products_body'>
          <h1 className=' products_title'>Espelhos</h1>
          <h2 className='products_subtitle'>
            Para banheiros e <span>muito</span> mais!
          </h2>
          <p className='products_description'>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt.
          </p>
          <div className='container_btn'>
            <img className='polygon' src={polygon} alt='' />
            <img className='polygon2' src={polygon} alt='' />
            <button className='products_btn'>Iniciar orçamento</button>
          </div>
        </div>
      </section>
      <section className='product_info'>
        <h3>Informações:</h3>
        <div className='container_info'>
          <ul>
            <li>
              <h4>Título Base</h4>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui
                dolorem.Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                aut odit aut fugit, sed quia consequuntur magni dolores eos qui
                ratione.
              </p>
            </li>
            <li>
              <h4>Título Base</h4>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui
                dolorem.Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                aut odit aut fugit, sed quia consequuntur magni dolores eos qui
                ratione.
              </p>
            </li>
            <li>
              <h4>Título Base </h4>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui
                dolorem.Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                aut odit aut fugit, sed quia consequuntur magni dolores eos qui
                ratione.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className='img_elo'>
      </section>
      <section className='question_info'>
        <h2>
          Tem alguma duvida? Entre em contato conosco que vamos lhe ajudar!
        </h2>
        <p>Horário de funcionamento: Segunda à sábado - 9h às 18h</p>
        <div className='container_contact_btn'>
          <button className='contact_btn'>Ligue agora: (81) 4042-0876</button>
          <button className='contact_btn'>
            <img src={wpicon} alt='whatsapp' className='wp_icon' />
            Fale pelo WhatsApp
          </button>
        </div>
      </section>
    </>
  )
}
