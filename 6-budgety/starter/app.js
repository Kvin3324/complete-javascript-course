const description = document.querySelector('.add__description');
const addButton = document.querySelector('.add__btn');
const inputValue = document.querySelector('.add__value');
const selectCursor = document.querySelector('.add__type');
const incomeList = document.querySelector('.income__list');
const expensesList = document.querySelector('.expenses__list');
const budgetTotal = document.querySelector('.budget__value');


// BUDGET CONTROLLER

const data = {
        inc: 0,
        exp: 0
}

// GLOBAL APP CONTROLLER

function createHtmlElement(description, inputValue, element) {
        let htmlDiv = document.createElement('div');
        htmlDiv.innerHTML =
                `<div class="item clearfix" id="income-0">
                        <div class="item__description">${description}</div>
                                <div class="right clearfix">
                                        <div class="item__value">${inputValue}</div>
                                        <div class="item__delete">
                                                <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
                                        </div>
                                </div>
                        </div>`;
        element.appendChild(htmlDiv);
}

function checkAddValue() {
        if (description.value !== "" && inputValue.value !== "") {
                if (selectCursor.value === "inc") {
                        createHtmlElement(description.value, inputValue.value, incomeList);
                        data.inc += parseInt(inputValue.value);
                        document.querySelector('.budget__income--value').innerHTML = `+ ${data.inc}`;
                        calcBudget(data.inc, data.exp);
                        description.value = "";
                        inputValue.value = "";
                }
                else if (selectCursor.value === "exp") {
                        createHtmlElement(description.value, inputValue.value, expensesList);
                        data.exp += parseInt(inputValue.value);
                        document.querySelector('.budget__expenses--value').innerHTML = `- ${data.exp}`;
                        calcBudget(data.inc, data.exp);
                        description.value = "";
                        inputValue.value = "";
                }
        }
        else {
                alert(`Please enter a correct description and a value`);
        }
}
document.addEventListener('keypress', function (event) {
        if (event.keyCode === 13) {
                checkAddValue();
        }
}); 

addButton.addEventListener('click', function() {
        checkAddValue();

});

function calcBudget(budgetInc, budgetExp) {
        const total = budgetInc - budgetExp;
        if (total > 0) {
        budgetTotal.textContent = `+ ${total}`       
        } else {
        budgetTotal.textContent = `${total}`               
        }
}

//BUDGET CONTROLLER
            // Create new ID
            // Create new item based on 'inc' or 'exp' type
            // Push it into our data structure  
            // Return the new element

// UI CONTROLLER
            // Create HTML string with placeholder text
            // Replace the placeholder text with some actual data
            // Insert the HTML into the DOM 
            // Replace default value
            // Display new income value

// GLOBAL APP CONTROLLER
        // 1. Get the filled input data

        // 2. Add the item to the budgetController
        // 3. Add the item to the UI
        // 4. Clear fields
        // 5. Display the budget on the UI
