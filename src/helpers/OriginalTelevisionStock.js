function calculateOriginalTelevisionStock(inventoryArray) {
    let TotalOriginalStock = 0;

    for (let i = 0; i < inventoryArray.length; i++) {
        TotalOriginalStock = TotalOriginalStock + inventoryArray[i].originalStock;
    }
    // console.log(TotalOriginalStock);
    return TotalOriginalStock;
}

export default calculateOriginalTelevisionStock;