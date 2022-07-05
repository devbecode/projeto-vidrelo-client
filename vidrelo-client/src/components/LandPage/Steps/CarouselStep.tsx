import { Link } from "react-router-dom";
import './Style/CarouselStep.scss'

export default function CarouselStep({numberStep ,titleStep, descriptionStep , imgStep }:{numberStep:string ,titleStep:string, descriptionStep:string, imgStep:string}): JSX.Element {
    return (
        <div className="carousel-step">
            <div className="card-border">
                <div className="card-carousel">
                    <div className="img-container">
                        <img src={imgStep} alt="steps" />
                    </div>
                    <div className="card-content">
                        <h4 className="title-step">
                            <span>{numberStep}</span>
                           {titleStep}
                        </h4>
                        <p>{descriptionStep}
                        </p>
                        <div className="btn-field">
                            <Link className="btn-budget" to="/orcamento">Simular Orçamento</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}