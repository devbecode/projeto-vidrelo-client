import { Link } from "react-router-dom";
import './Style/CarouselStepResponsive.scss'

export default function CarouselStep({ numberStep, titleStep, descriptionStep, imgStep }: { numberStep: string, titleStep: string, descriptionStep: string, imgStep: string }): JSX.Element {
    return (
        <div className="carousel-step-responsive" style={{
            backgroundImage: `url(${imgStep})`,
            backgroundSize: "100% 53%",
            backgroundRepeat: "no-repeat",
            backgroundPositionY: "0%"
        }}>
            <div className="card-carousel-responsive" >
                <div className="number-content-responsive">
                    <span>{numberStep.replace(".", "")}</span>
                </div>
                <div className="title-content-reponsive">
                    <h4 className="title-step">
                        {titleStep}
                    </h4>
                </div>
                <div className="card-content-responsive">
                    <p>{descriptionStep}
                    </p>
                    <div className="btn-field">
                        <Link className="btn-budget" to="/orcamento">Simular Orçamento</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}