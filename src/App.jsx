import './App.css';
import TelevisionsSold from "./helpers/TelevisionsSold.js";
import OriginalTelevisionStock from "./helpers/OriginalTelevisionStock.js";
import TelevisionsToBeSold from "./helpers/TelevisionsToBeSold.js";
import {bestSellingTv, inventory} from "./constants/inventory.js";
import FormatScreenSizes from "./helpers/FormatScreenSizes.js";

function App() {
    return (
        <main className="main-container">
            <h1>Tech it easy dashboard</h1>
            <section className="dashboard-section">
                <h3>Verkoopoverzicht</h3>
                <div className="dashboard-container">
                    <article className="dashboard-card items-sold">
                        <p>Aantal verkochte producten</p>
                        <h3>{TelevisionsSold(inventory)}</h3>
                    </article>
                    <article className="dashboard-card items-initial">
                        <p>Aantal ingekochte producten</p>
                        <h3>{OriginalTelevisionStock(inventory)}</h3>
                    </article>
                    <article className="dashboard-card items-to-be-sold">
                        <p>Aantal te verkopen producten</p>
                        <h3>{TelevisionsToBeSold(inventory)}</h3>
                    </article>
                </div>
            </section>
            <section className="best-seller-section">
                <h3>Best verkochte tv</h3>
                <span className="best-selling-tv-image">
                        <img src={bestSellingTv.sourceImg} alt="Afbeelding van de tv"/>
                </span>
                <article className="best-selling-tv">
                    <h4>{bestSellingTv.brand} {bestSellingTv.type} - {bestSellingTv.name}</h4>
                    <h3>€{bestSellingTv.price},-</h3>
                    <small>{FormatScreenSizes(bestSellingTv)}</small>
                    <small></small>
                </article>
            </section>
        </main>
    )
}

export default App
