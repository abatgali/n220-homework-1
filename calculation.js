let tickets = 3; 
let cost = tickets * 14;

document.getElementById("ticketNum").innerHTML += tickets;
document.getElementById("ticketCost").innerHTML += cost;
document.getElementById("ttCost").innerHTML += cost + (cost * 0.07);


let balance = 235.87;
let jacket = 70;
let sweater = 55;
let shirt = 35;
let pants = 75;
let skirt = 49;
let sandals = 30;
let shoes = 60;

let items_cost = shirt + pants + shoes + sweater;


// balance after purchase 
balance -= items_cost;

console.log(balance);
document.getElementById("bank").innerHTML = "Bank balance after purchase: $" + balance.toFixed(2);


let query = balance >= jacket;

if (query) 
    document.getElementById("addJacket").innerHTML = query + " (Enough bank balance to buy a jacket.)"

else
    document.getElementById("addJacket").innerHTML = query + " (Not enough bank balance to buy a jacket.)"

let pizza = 4;
let pieces = 8;
let total_pieces = pieces * pizza;
// 5 slices can be used to feed two students
let students = total_pieces / 5; 
console.log(students)
// Rounding off to the nearest digit
students = Math.round(students) * 2;

document.getElementById("studPizza").innerHTML = "Number of students that can be fed: " + students;

// pizza slices left for Prof. Rector
let slices = total_pieces - (students * 2.5);

document.getElementById("profPizza").innerHTML += slices;


let adult = 12.00;
let child = 6;
let drinks = 1.50;

let adultBuffet = 2 * adult;
let childBuffet = 1 * child;
let totalDrinks = 3 * drinks;

let totalCost = adultBuffet + childBuffet + totalDrinks;

document.getElementById("Monty").innerHTML = "Total cost: $" + totalCost.toFixed(2);

let week1 = 202.45;
let week2 = 134.97;
let week3 = 256.63;
let week4 = 178.22;

let averageTips = (week1 + week2 + week3 + week4) / 4;

document.getElementById("tips").innerHTML = "Average Tips: $" + averageTips.toFixed(2);

