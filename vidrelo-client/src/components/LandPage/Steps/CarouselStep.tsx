import { Link } from "react-router-dom";
import './Style/CarouselStep.scss'

export default function CarouselStep() {
    return (
        <div className="carousel-step">
            <div className="card-border">
                <div className="card-carousel">
                    <div className="img-container">
                    </div>
                    <div className="card-content">
                        <h4 className="title-step">
                            <span>1.</span>
                            Escolha seu produto e coloque as medidas aproximadas
                        </h4>
                        <p>Após escolher o produto, você poderá adicionar medidas,
                            escolher tipo de ferragens, cores do vidro e demais informações para compor
                            seu orçamento simulado
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