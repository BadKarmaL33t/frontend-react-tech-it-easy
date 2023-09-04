function formatScreenSizes(tv) {
    let availableScreenSizes = null;

    for (let i = 0; i < tv.availableSizes.length; i++) {
        if (i === 0) {
            availableScreenSizes = tv.availableSizes[i] + " inch (" + (tv.availableSizes[i] * 2.54) + " cm) | ";
        } else if (i < tv.availableSizes.length) {
            availableScreenSizes = availableScreenSizes + tv.availableSizes[i] + " inch (" + (tv.availableSizes[i] * 2.54) + " cm) | ";
        } else {
            availableScreenSizes = availableScreenSizes + tv.availableSizes[i] + " inch (" + (tv.availableSizes[i] * 2.54) + " cm)";
        }
    }
    return availableScreenSizes;
}

export default formatScreenSizes;