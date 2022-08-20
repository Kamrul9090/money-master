//step-1: create a function for inputField value

function inputFieldValue(inputField) {
    const input = document.getElementById(inputField);
    const inputValue = input.value;
    const inpuNumber = parseFloat(inputValue);
    if (isNaN(inpuNumber)) {
        alert("Please give valid amount");
        return inputFieldValue();
    }
    else {
        return inpuNumber;
    }
}

// step-7: create a function for innerText value
function innerTextValue(text, value) {
    const stringText = document.getElementById(text);
    stringText.innerText = value;
}

//step-2: add a handler in the calculate button for calculation

const calculation = document.getElementById("calculate");
calculation.addEventListener("click", function () {
    //step-3: get income value
    const income = inputFieldValue("income");
    //step-4: get food-expenses value
    const food = inputFieldValue("food-expenses");
    //step-5: get rent-expenses value
    const rent = inputFieldValue("rent-expenses");
    //step-6: get clothes-expenses value
    const clothes = inputFieldValue("clothes-expenses");
    //step-7:calculate income and expenses amount
    const Expenses = food + rent + clothes;
    const Blance = income - Expenses;


    if (income < 0 || food < 0 || rent < 0 || clothes < 0) {
        alert("Please give positive input")
    } else {
        //step-9: show totalExpenses amount
        innerTextValue("total-expenses", Expenses.toFixed(2));
        //step-10: show totalBlance amount
        innerTextValue("total-blance", Blance.toFixed(2));
    }
});


//step-11: add handler in the save button to get save parcentage

const save = document.getElementById("save-percentag");
save.addEventListener("click", function () {
    // step-12: get percentage input value
    const input_percentage = inputFieldValue("input-percentag");
    //step-13:get total blance

    const blance = document.getElementById("total-blance");
    const blanceValue = blance.innerText;

    //My Income blance
    const incomeBlance = inputFieldValue("income")
    if (input_percentage > 100) {
        alert("you have enough money");
        return input_percentage;
    } else {
        //step-14: calculate percentage amount
        const percentag = (incomeBlance * input_percentage) / 100;
        //step-15 get remainder Blance
        const remainderBlance = blanceValue - percentag;
        //step-16: showing saving and remainder amount
        innerTextValue("saving-amount", percentag.toFixed(2));
        innerTextValue("reminder-blance", remainderBlance.toFixed(2));
    }
});


