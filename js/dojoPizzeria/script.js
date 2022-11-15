// Plans: 
// add topping count up to 4 per randomized pizza
// add cheese count up to 2 per randomized pizza
// Somehow balance the randomizer so the last option doesn't have greater odds.. Or fill out the arrays to 10 options.
// Figure out how to have more than 10 options for toppings


// Ingredients object
var ingredients = {
    crustType : ["deep dish crust", "hand tossed crust", "thin crust", "stuffed crust", "cauliflower crust", "cardboard crust", "gluten free crust", "whole wheat crust"],
    sauceType : ["traditional sauce", "marinara sauce", "no sauce", "salsa", "chocolate syrup"],
    cheeseType : ["mozzarella cheese", "feta cheese", "blue cheese", "toe cheese", "muenster cheese", "cream cheese", "non-dairy cheese", "goat cheese"],
    toppingsType : ["onions", "garlic", "anchovies", "pepperoni", "sausage", "chicken", "bacon", "bbq sauce", "hot sauce", "sun dried tomatos"]
}

// Phrase for output
var bonAppetit = "Bon Appetit!";

// Function
function randomPizza(crustType, sauceType, cheeseType, toppingsType) {
    var randomizer = { // RNGing a number to index crust, sauce, cheese, topping and output phrase
        crustIndex: Math.round(Math.random()*10),
        sauceIndex: Math.round(Math.random()*10),
        cheeseIndex: Math.round(Math.random()*10),
        toppingIndex: Math.round(Math.random()*10),
        bonAppetitIndex: Math.round(Math.random()*10)
    }
// These if-statements will ensure that if our Type-arrays contain below 10 entries, we will not end up with an 'undefined' value.
// With this method, our final array index technically has greater odd to be be selected
    if (randomizer.crustIndex > ingredients.crustType.length-1) {
        randomizer.crustIndex = ingredients.crustType.length-1;
    }
    if (randomizer.sauceIndex > ingredients.sauceType.length-1) {
        randomizer.sauceIndex = ingredients.sauceType.length-1;
    }
    if (randomizer.cheeseIndex > ingredients.cheeseType.length-1) {
        randomizer.cheeseIndex = ingredients.cheeseType.length-1;
    }
    if (randomizer.toppingIndex > ingredients.toppingsType.length-1) {
        randomizer.toppingIndex = ingredients.toppingsType.length-1;
    }
// This if statement simply adds some more variety to the output 
    if (randomizer.bonAppetitIndex > 4) {
        bonAppetit = "Enjoy your meal!"
    }
// This object is out final randomized pizza template to write to.
    var pizza = {}
    pizza.crustType = crustType[randomizer.crustIndex];
    pizza.sauceType = sauceType[randomizer.sauceIndex];
    pizza.cheeseType = cheeseType[randomizer.cheeseIndex];
    pizza.toppingsType = toppingsType[randomizer.toppingIndex];
    return pizza;
}
// "Save" our function return to console log below
var za3 = randomPizza(ingredients.crustType, 
ingredients.sauceType, 
ingredients.cheeseType, 
ingredients.toppingsType);

// Console Log your order!

console.log("Your random pizza consists of: " + za3); // Doesn't work for some reason
console.log(`Your random pizza has a ${za3.crustType}, slathered with ${za3.sauceType}, sprinkled with ${za3.cheeseType}, and topped with ${za3.toppingsType}! ${bonAppetit}`);


//Learn platform requests
function pizzaOven(crustType, sauceType, cheeseType, toppingsType) {
    var pizza = {}
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeseType = cheeseType;
    pizza.toppingsType = toppingsType;
    return pizza;
}


var za1 = pizzaOven("deep dish crust", "traditional sauce", ["mozzarella cheese"], ["pepperoni", "sausage"]);
console.log(`Your learn-platform pizza has a ${za1.crustType}, slathered with ${za1.sauceType}, sprinkled with ${za1.cheeseType}, and topped with ${za1.toppingsType[0]} & ${za1.toppingsType[1]}! ${bonAppetit}`);
// console.log("Your learn-platform pizza consists of: ");
// console.log(za1);
var za2 = pizzaOven("hand tossed crust", "marinara sauce", ["mozzarella cheese", "feta cheese"], ["mushrooms", "olives", "onions"]);
console.log(`Your other learn-platform pizza has a ${za2.crustType}, slathered with ${za2.sauceType}, sprinkled with both ${za2.cheeseType[0]} & ${za2.cheeseType[1]}, and topped with ${za2.toppingsType[0]}, ${za2.toppingsType[1]}, & ${za2.toppingsType[2]}! ${bonAppetit}`);
// console.log("Your other learn-platform pizza consists of: ");
// console.log(za2);