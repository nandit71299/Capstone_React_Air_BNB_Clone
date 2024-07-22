import "../assets/Card.css"

export default function Card(props) {
    return (
        <div className="Experiences--Container">
            <div className="Experiences--Card">
                {props.cardStrip ? <div className="Experiences--Card--CardStrip">{props.cardStrip}</div> : ""}
                <img className="Experiences--Image" src={props.imageSrc} alt="" />
                <div className="Experiences--Card--Rating">
                    <i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i>
                    <p>{props.rating}</p>
                    <p>•</p>
                    <p>{props.country}</p>
                </div>
                <div className="Experiences--Card--Info--Container">
                    <h2 className="Experiences--Card--Info--Container--Title">{props.title}</h2>
                    <p className="Experiences--Card--Info--Container--Price">From {props.price} <span style={{ fontWeight: "normal" }}>/ Person</span></p>
                </div>
            </div>

        </div>
    )
}