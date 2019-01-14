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
};
//Date
date.textContent = `${new Date().getDate()}, ${month[new Date().getMonth()]}, ${new Date().getFullYear()}`;
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
                                <div class="item__value">${new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(this.value)}</div>
                                <div class="item__percentage">${this.pourcentage}%</div>
                                <div class="item__delete">
                                <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
                        </div>
                        </div>
                </div>`;
                element.appendChild(htmlDiv);
                this.html = htmlDiv;
                return this.updatePercentage();
        }
        this.updateBudgetValue = function() {
                if (this.type === "inc") {
                        data.inc += parseFloat(this.value);
                        document.querySelector('.budget__income--value').innerHTML = `+ ${new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(data.inc)}`;
                } else {
                        data.exp += parseInt(this.value);
                        document.querySelector('.budget__expenses--value').innerHTML = `- ${new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(data.exp)}`;
                }
        }
        this.calcPourcent = function (element) {
                if (element.type === "inc") {
                        let pourcentage = Math.round(element.value * 100 / parseInt((data.inc)).toFixed(2));
                         return element.pourcentage = pourcentage;
                } else {
                        let pourcentage = Math.round(element.value * 100 / data.exp);
                        element.pourcentage = pourcentage;
                        this.percentageTotal(data.inc, data.exp);
                }
        }
        this.calcBudget = function (budgetInc, budgetExp) {
                let total = budgetInc - budgetExp;
                if (total > 0) {
                        budgetTotal.textContent = `+ ${new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(total)}`;
                } else {
                        budgetTotal.textContent = `${ new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(total)}`;
                }
        }

        this.updatePercentage = function () {
                elementTab.forEach(element => {
                        this.calcPourcent(element);
                        element.html.querySelector('.item__percentage').textContent = `${element.pourcentage}%`;
                });
        }

        this.deleteElem = function () {
                const deleteBtn = this.html.querySelector('.item__delete--btn');
                deleteBtn.addEventListener('click', () => {
                        if (this.type === "inc") {
                                this.html.remove();
                                data.inc -= this.value;
                                document.querySelector('.budget__income--value').innerHTML = `+ ${data.inc}`;
                                this.calcBudget(data.inc, data.exp);
                                this.removeByDescription(elementTab);
                                this.updatePercentage();
                        } else {
                                this.html.remove();
                                data.exp -= this.value;
                                document.querySelector('.budget__expenses--value').innerHTML = `- ${data.exp}`;
                                this.calcBudget(data.inc, data.exp);
                                this.removeByDescription(elementTab);
                                this.updatePercentage();
                                this.percentageTotal(data.inc, data.exp);                               
                        }
                })
        }
        this.removeByDescription = function (array) {
                for (let i = 0; i <= array.length; i++) {
                        if (array[i].description === this.description) {
                                array.splice(i, 1);
                                return array;
                        }
                }
        }
        this.percentageTotal = function (budgetInc, budgetExp) {
               if (data.exp !== '') {
                const total = budgetInc - budgetExp;
                const totalPercentage = Math.round((data.exp * 100) / total);
                document.querySelector('.budget__expenses--percentage').textContent = `${totalPercentage}%`; 
                document.querySelector('.budget__expenses--percentage').style.backgroundColor = 'rgba(255, 255, 255, 0.2)'; 
               } else {
                document.querySelector('.budget__expenses--percentage').textContent = '';     
               }
        }

        this.startAll = function (el) {
                this.updateBudgetValue();
                this.calcPourcent(this);
                this.calcBudget(data.inc, data.exp);
                this.createHtmlElement(el);
                this.deleteElem();
        }
        elementTab.push(this);
}
// BUDGET CONTROLLER

function checkAddValue() {
        if (description.value !== "" && inputValue.value !== "") {
                if (selectCursor.value === "inc") {
                        new Element(description.value, inputValue.value, selectCursor.value).startAll(incomeList);
                        description.value = "";
                        inputValue.value = "";
                        return;
                }
                else if (selectCursor.value === "exp") {
                        new Element(description.value, inputValue.value, selectCursor.value).startAll(expensesList);
                        description.value = "";
                        inputValue.value = "";
                        return;
                }
        }
        else {
                alert(`Please enter a correct description and a value`);
        }
}

// function changedType() {
//         const fields = document.querySelectorAll(selectCursor, description, inputValue);
//         if (selectCursor.value === "exp") {
//                 fields.classList.toggle('red-focus')
//         }
// }


document.addEventListener('keypress', function (event) {
        if (event.keyCode === 13) {
                checkAddValue();             
        }
}); 

addButton.addEventListener('click', function() {
        checkAddValue();
});
