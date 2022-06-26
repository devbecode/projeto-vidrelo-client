import "./Style/CardClientFeedback.scss"
import "./Style/CardClientFeedbackResponsive.scss"
export default function CardClientFeedback(
    { nameClient, profession, message }: { nameClient: String, profession: String, message: String, }
) {
    return (
        <>
            <div className="card-feedback">
                <div className="card-client-content">
                    <h4>{nameClient}</h4>
                    <span>{profession}</span>
                    <p>
                        {message}
                    </p>
                </div>
            </div>
        </>
    )
}