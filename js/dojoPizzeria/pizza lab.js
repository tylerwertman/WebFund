
function ingPicker() {
    var ingredients = {
        crustType : ["deep dish", "hand tossed", "thin crust", "stuffed crust", "cauliflower crust", "cardboard", "gluten free"],
        sauceType : ["traditional", "marinara", "no sauce", "salsa", "BBQ sauce", "chocolate syrup"],
        cheese : ["mozzarella", "feta", "blue cheese", "toe cheese", "muenster", "cream cheese", "non-dairy"],
        toppings : ["onions", "garlic", "anchovies", "pepperoni", "sausage", "chicken", "bacon", "bbq sauce", "hot sauce"],
        crustIndex: Math.round(Math.random()*10),
        sauceIndex: Math.round(Math.random()*10),
        cheeseIndex: Math.round(Math.random()*10),
        toppingIndex: Math.round(Math.random()*10)
    }
    // console.log(ingredients);

    if (ingredients.crustIndex > ingredients.crustType.length) {
        ingredients.crustIndex = 6;
    }
    if (ingredients.sauceIndex > 5) {
        ingredients.sauceIndex = 5;
    }
    if (ingredients.cheeseIndex > 6) {
        ingredients.cheeseIndex = 6;
    }
    if (ingredients.toppingIndex > 8) {
        ingredients.toppingIndex = 8;
    }

    console.log(ingredients.crustIndex);
    return ingredients;
}

ingPicker();



function pizzaOven(crustType, sauceType, cheese, toppings) {
    var pizza = {}
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}


// var za1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
// console.log(za1);
// var za2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
// console.log(za2);

var za3 = pizzaOven(ingredients.crustType[random.math1], 
ingredients.sauceType[random.math2], 
ingredients.cheese[random.math3], 
ingredients.toppings[random.math4]);

console.log(za3);