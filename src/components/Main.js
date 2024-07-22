import Card from "./Card"
import "../assets/Main.css"
import data from "./data"

export default function Main() {
    return (
        <div className="Main--Container">
            <h1 className="Main--Heading">Online Experiences</h1>
            <p className="Main--Message">
                Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
            <div className="Main--Cards">
                {data.map((item, index) => (
                    <Card
                        key={index}
                        cardStrip={item.cardStrip}
                        imageSrc={item.imageSrc}
                        rating={item.rating}
                        country={item.country}
                        title={item.title}
                        price={item.price}
                    />))}
            </div>
        </div>
    )
}