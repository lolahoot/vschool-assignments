var shopper = {
    name: "Lanie",
    monthlyGroceryBudget: 600,
    isGroceryShoppingFun: false,
    groceryCart: ["apples", "rice", "orange juice", "bread", "almonds", "soup"],
    likeToShop: function () {
        if (isGroceryShoppingFun) {
            return "Enjoy yourself."
        } else {
            return "Ask someone else."
        }
    }
}
shopper.likeToShop();
