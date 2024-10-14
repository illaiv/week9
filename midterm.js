const foodItem = [
{
    name: "cake",
    price: "$1.00",
    calories:"200"
},
{
    name: "Pizza",
    price: "$2.00",
    calories:"200"
},
{
    name: "Donut",
    price: "$3.00",
    calories:"300"
},
{
    name: "fish",
    price: "$4.00",
    calories:"400"
},
{
    name: "burrito",
    price: "$5.00",
    calories:"500"
},
]
// list to print the items in array
let foodList = document.querySelector(".foodList");
let allFoodList = `<ol>`;
foodItem.forEach((foodItem) => {
    allFoodList += `<li> ${foodItem.name} </li>`;
});
allFoodList += `</ol>`;

foodList.innerHTML = allFoodList;

//allows user to enter choice 
const findItem = () => {
    let action = document.querySelector("#foodChoice").value; 
    let foodInSelection;
    switch (action) {
        case "C":
        createAFood();
        break;
        case "U":
        foodInSelection = findAFood();
        alert(foodInSelection);
        console.log(foodInSelection);
        updateAFood(foodInSelection);
        break;
        case "D":
        foodInSelection = findAfood();
        deleteAFood(foodInSelection);
        break;

    }
};
//create the food for updating 
const createAFood = () => {
    setFoodInfo(null);
    let name = prompt("Food Name?");
    let cals = prompt("Food Calories?");
    let cost = prompt("Food Price?");
    foodItem.push({
        foodList: name,
        calories: parseFloat(cals),
        price: parseFloat(cost)
    });
listFood();
console.log(food);

};

//find that gets the food listed and stores it in choice 
function action() {

    let foodInput = document.getElementById("foodChoice").value
    let selectedFood = foodItem.find(food => foodItem.name.includes(foodInput));
    
    if (selectedFood) {
        document.querySelector(".selectedFoodInfo").textContent = `Name: ${selectedFood.name}`;

    } else {
        document.querySelector(".selectedFoodInfo").textContent = "No food with that name exists..please select another food";
        let foodInput = document.getElementById("foodChoice").value

    }
}

