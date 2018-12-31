const description = document.querySelector('.add__description');
const addButton = document.querySelector('.add__btn');
const inputValue = document.querySelector('.add__value');
const selectCursor = document.querySelector('.add__type');
const incomeList = document.querySelector('.income__list');
const expensesList = document.querySelector('.expenses__list');
const budgetTotal = document.querySelector('.budget__value');
const elementTab = [];
const data = {
        inc: 0,
        exp: 0
}

// GLOBAL APP CONTROLLER

const Element = function (description, value, type) {
        this.description = description;
        this.value = value;
        this.type = type;
        this.createHtmlElement = function(element) {
                let htmlDiv = document.createElement('div');
                htmlDiv.innerHTML =
                `<div class="item clearfix" id="income-0">
                        <div class="item__description">${this.description}</div>
                        <div class="right clearfix">
                                <div class="item__value">${this.value}</div>
                                <div class="item__percentage"></div>
                                <div class="item__delete">
                                <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
                        </div>
                        </div>
                </div>`;
                element.appendChild(htmlDiv);
        }
        this.updateBudgetValue = function() {
                if (this.type === "inc") {
                        data.inc += parseInt(this.value);
                        document.querySelector('.budget__income--value').innerHTML = `+ ${data.inc}`;
                } else {
                        data.exp += parseInt(this.value);
                        document.querySelector('.budget__expenses--value').innerHTML = `- ${data.exp}`;
                }
        }
        this.calcBudget = function (budgetInc, budgetExp) {
                const total = budgetInc - budgetExp;
                if (total > 0) {
                        budgetTotal.textContent = `+ ${total}`;
                } else {
                        budgetTotal.textContent = `${total}`;
                }
        }
        this.startAll = function (el) {
                this.createHtmlElement(el);
                this.updateBudgetValue();
                this.calcBudget(data.inc, data.exp);
        }
        elementTab.push(this);
}
// BUDGET CONTROLLER

function checkAddValue() {
        if (description.value !== "" && inputValue.value !== "") {
                if (selectCursor.value === "inc") {
                        let newElement = new Element(description.value, inputValue.value, selectCursor.value);
                        newElement.startAll(incomeList);
                        description.value = "";
                        inputValue.value = "";
                        return;
                }
                else if (selectCursor.value === "exp") {
                        let newElement = new Element(description.value, inputValue.value, selectCursor.value);
                        newElement.startAll(expensesList);
                        description.value = "";
                        inputValue.value = "";
                        return;
                }
        }
        else {
                alert(`Please enter a correct description and a value`);
        }
}
// function displayPercentage(budgetExp, budgetActionList) {
//         const percentage = 
//         // const percentageAction;
// }

document.addEventListener('keypress', function (event) {
        if (event.keyCode === 13) {
                checkAddValue();
                
        }
}); 
addButton.addEventListener('click', function() {
        checkAddValue();
});

document.addEventListener("click", function(event) {
        if (event.target.className === "ion-ios-close-outline") {
                let ancetre = event.target.closest(".item");
                const valueAction = event.target.closest('.right').firstElementChild.textContent;
                if (event.target.closest('.income') ) {
                      data.inc -= valueAction;
                      ancetre.remove(); 
                      document.querySelector('.budget__income--value').innerHTML = `+ ${data.inc}`;

                } else {
                        data.exp -= valueAction;
                        ancetre.remove();
                        document.querySelector('.budget__expenses--value').innerHTML = `- ${data.exp}`;      
                }
                calcBudget(data.inc, data.exp);
        }  
});

/************** Date
 * const month = ["janvier", "fevrier", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre"];

console.log(month[new Date().getMonth()]);
console.log(new Date().getFullYear());
 */


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
