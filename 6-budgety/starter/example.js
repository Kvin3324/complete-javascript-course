
//BUDGET CONTROLLER
const budgetController = (function () {
    const Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    const Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    const data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    };

    return {
        addItem: function (type, des, val) {
            let newItem, ID;

            // Create new ID
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }

            // Create new item based on 'inc' or 'exp' type
            if (type === 'exp') {
                newItem = new Expense(ID, des, val)
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val)
            }

            // Push it into our data structure  
            data.allItems[type].push(newItem);

            // Return the new element
            return newItem;
        },

        addTotal: function (type, val) {
            let newValue, newTotal;
            // Pick values
            if (data.totals(val) > 0) {
                newValue = data.totals[val + val];
            } else {
                newValue = 0;
            }
            // Add one by one
            if (type === 'exp') {
                newTotal = new Expense(newValue)
            } else if (type === 'inc') {
                newTotal = new Income(newValue)
            }
            // Return the new element
            return newTotal;
        }
    };





})();


// UI CONTROLLER
const UIController = (function () {

    const DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        incomeValue: '.budget__income--value',
        expensesContainer: '.expenses__list',
        expenseValue: 'budget__expenses--value',
    };

    return {
        getInput: function () {
            return {
                type: document.querySelector(DOMstrings.inputType).value, // Will be either inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },

        addListItem: function (obj, type) {
            let html, newHtml, element;

            // Create HTML string with placeholder text
            if (type === 'inc') {
                element = DOMstrings.incomeContainer;

                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'

            } else if (type === 'exp') {
                element = DOMstrings.expensesContainer;

                html = '<div class="item clearfix" id = "expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value"> value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div >'
            }

            // Replace the placeholder text with some actual data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('value%', obj.value);

            // Insert the HTML into the DOM 
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },

        clearFields: function () {
            let fields, fieldsArr;
            fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue)

            fieldsArr = Array.prototype.slice.call(fields);

            fieldsArr.forEach(function (current, index, array) {
                current.value = ""
            })
            fieldsArr[0].focus();
        },

        getDOMstrings: function () {
            return DOMstrings;
        },

        changeValue: function (obj, type) {
            let html = "";
            let newHtml, expenseVal, incomeVal;
            // Replace default value
            if (type === 'inc') {
                incomeVal = DOMstrings.incomeValue;
                html = '<div class="budget__income--value">%value%/div>';
            } else if (type === 'exp') {
                expenseVal = DOMstrings.expenseValue;
                html = '<div class="budget__expenses--value">%value%</div>';
            }
            newHtml = html.replace('%value%', obj.value);
            document.querySelector(incomeVal).insertAdjacentHTML('beforebegin', newHtml);
            document.querySelector(expenseVal).insertAdjacentHTML('beforebegin', newHtml);
            // Display new income value
        }
    }
})();


// GLOBAL APP CONTROLLER
const controller = (function (budgetCtrl, UICtrl) {

    const setupEventListeners = function () {
        const DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function (event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });
    };

    const ctrlAddItem = function () {
        let input, newItem;
        let newTotal = {};

        // 1. Get the filled input data
        input = UICtrl.getInput();
        // 2. Add the item to the budgetController
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);
        // 3. Add the item to the UI
        UICtrl.addListItem(newItem, input.type);

        // 4. Clear fields
        UICtrl.clearFields();
        // 4. Calculate the budget
        UICtrl.changeValue(newTotal, input.value);
        // 5. Display the budget on the UI
    };

    return {
        init: function () {
            console.log('Application has started.');
            setupEventListeners();
        }
    };

})(budgetController, UIController);

controller.init();