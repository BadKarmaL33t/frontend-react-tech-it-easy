function calculateTelevisionsSold(inventoryArray) {
    let totalSold = 0;

    for (let i = 0; i < inventoryArray.length; i++) {
        totalSold = totalSold + inventoryArray[i].sold;
    }
    // console.log(totalSold);
    return totalSold;
}

export default calculateTelevisionsSold;