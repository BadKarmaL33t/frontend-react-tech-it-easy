import calculateTelevisionsSold from "./TelevisionsSold.js";
import calculateOriginalTelevisionStock from "./OriginalTelevisionStock.js";

function calculateTelevisionsToBeSold(toBeSoldArray) {
    return calculateOriginalTelevisionStock(toBeSoldArray) - calculateTelevisionsSold(toBeSoldArray);
}

export default calculateTelevisionsToBeSold;