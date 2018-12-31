const month = ["janvier", "fevrier", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre"];
const date = document.querySelector('.budget__title--month');
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
                                <div class="item__percentage">${this.pourcentage}%</div>
                                <div class="item__delete">
                                <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
                        </div>
                        </div>
                </div>`;
                element.appendChild(htmlDiv);
                return this.html = htmlDiv;
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
        this.calcPourcent = function () {
                if (this.type === "inc") {
                        let pourcentage = Math.round(this.value * 100 / data.inc);
                        return this.pourcentage = pourcentage;
                } else {
                        let pourcentage = Math.round(this.value * 100 / data.exp);
                        return this.pourcentage = pourcentage;
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
        this.deleteElem = function () {
                const objectActual = this;
                const deleteBtn = this.html.querySelector('.item__delete--btn');
                deleteBtn.addEventListener('click', function () {
                        if (objectActual.type === "inc") {
                                objectActual.html.remove();
                                data.inc -= objectActual.value;
                                document.querySelector('.budget__income--value').innerHTML = `+ ${data.inc}`;
                                objectActual.calcBudget(data.inc, data.exp);
                        } else {
                                objectActual.html.remove();
                                data.exp -= objectActual.value;
                                document.querySelector('.budget__expenses--value').innerHTML = `- ${data.exp}`;
                                objectActual.calcBudget(data.inc, data.exp);       
                        }
                })
        }   
        this.startAll = function (el) {
                this.updateBudgetValue();
                this.calcPourcent();
                this.createHtmlElement(el);
                this.calcBudget(data.inc, data.exp);
                this.deleteElem();
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


document.addEventListener('keypress', function (event) {
        if (event.keyCode === 13) {
                checkAddValue();
                
        }
}); 
addButton.addEventListener('click', function() {
        checkAddValue();
});

//Date

date.textContent = `${new Date().getDate()}, ${month[new Date().getMonth()]}, ${new Date().getFullYear()}`;
