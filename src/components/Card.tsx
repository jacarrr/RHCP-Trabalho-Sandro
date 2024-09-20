import "../styles/card.css"

interface ICardProps {
    title: string;
    description: string;
}

export default function Button({ title, description }: ICardProps) {
    return (
        <div className="card">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}