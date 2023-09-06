import FormatScreenSizes from "./FormatScreenSizes.js";
import FormatOptions from "./FormatOptions.jsx";

function listAllTelevisions(inventory) {
    return (
        <ul className="all-televisions-section">
            {inventory.map((tv, index) => (
                <li key={index}>
                    <article className="product product-standard-format">
        <span className="product-image">
          <img src={tv.sourceImg} alt={`Afbeelding van ${tv.name}`}/>
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