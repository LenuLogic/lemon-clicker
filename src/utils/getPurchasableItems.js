const getPurchasableItems = (items) => {
    let purchasableitems = [];
    let allItemsListed = false;

    items.forEach(item => {
        if (!allItemsListed) {
            purchasableitems.push(item);
            if (item.qty == 0) {
                allItemsListed = true;
            }
        }
    });
    return purchasableitems;
}

export default getPurchasableItems;