import './style/bannerProductionDetail.scss'
import banner from '../../../assets/images/illustrations/banner.svg'
export default function BannerProductionDetail() {
  return (
    <>
      <div className='banner-production-details' >
        <img className='img-banner-description-details' src={banner} alt="Imagem" />
      </div>
    </>
  )
}
