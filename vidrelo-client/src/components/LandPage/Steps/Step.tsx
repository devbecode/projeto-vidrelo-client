import CarouselStep from "./CarouselStep";
import "./Style/Step.scss"

export default function Step() {
    return (
        <>
            <section id='step'>
                <div className="step-content">
                    <h3>Tudo pronto em <span>4 passos</span></h3>
                    <CarouselStep />
                </div>
            </section>
        </>
    )
}