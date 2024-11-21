import "../styles/utility.css"
import "../styles/tetimonials.css"
import StarOpen from "../assets/star.svg"
import StarClose from "../assets/starout.svg"


interface ITestimonialCard {
    comentary: string;
    urlProfileImage: string;
    starNumber: number;
    nameCostumer: string;
    ocupationCostumer: string;
}

export default function TestimonialCard ( {comentary, urlProfileImage, starNumber, nameCostumer, ocupationCostumer}: ITestimonialCard) {

    return (
    <div className="carousel-content">
        <div className="carousel-card">
            <img src={urlProfileImage} alt="Imagem perfil cliente"  width={150} height={150}/>
            <span className="testimony">
                <p>
                    {comentary}
                </p>
            </span>
            <span className="rating">
                {Array(starNumber).fill(1).map(() => (
                    <img src={StarOpen} alt="ícone estrela" width={22} height={20} />
                ))}
                {Array(5 - starNumber).fill(1).map(() => (
                    <img src={StarClose} alt="ícone estrela" width={22} height={20} />
                ))}
            </span>
            <span className="names">
                <p className="bold">{nameCostumer}</p>
                <p>{ocupationCostumer}</p>
            </span>
        </div>
    </div>
    )
}   