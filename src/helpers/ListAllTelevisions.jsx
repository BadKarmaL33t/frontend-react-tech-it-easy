import FormatScreenSizes from "./FormatScreenSizes.js";
import FormatOptions from "./FormatOptions.jsx";
import out_of_stock from "../assets/out_of_stock.png";

function listAllTelevisions(inventory) {
    return (
        <ul className="all-televisions-section">
            {inventory.map((tv, index) => (
                <li key={index}>
                    <article className="product product-standard-format">
        <span className="product-image">
            {tv.originalStock - tv.sold > 0 ?
                <img src={tv.sourceImg} alt={`Afbeelding van ${tv.name}`}/>
                :
                <img src={out_of_stock} alt="Out of stock image"/>
            }
                </span>
                        <div className="product-info">
                            <h4>{tv.brand} {tv.type} - {tv.name}</h4>
                            <h3>€{tv.price},-</h3>
                            <small>{FormatScreenSizes(tv)}</small>
                            <small>{FormatOptions(tv)}</small>
                        </div>
                    </article>
                </li>
            ))}
        </ul>
    )
}

export default listAllTelevisions;