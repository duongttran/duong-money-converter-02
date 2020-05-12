let amountInput = document.getElementById('amount');

let convertButton = document.getElementById('convertButton');

convertButton.addEventListener("click", convert);

let moneyResult = document.getElementById("resultArea");



// VND to USD
function vndToUsd() {
    let result = amountInput.value;
    let convertedAmount = result / 23000;
    // document.getElementById("resultArea").innerHTML = `Your money in USD is ${convertedAmount}`;
    return convertedAmount;
}

// USD to VND
function usdToVnd() {
    let result = amountInput.value;
    let convertedAmount = result * 23000;
    // document.getElementById("resultArea").innerHTML = `Your money in VND is ${convertedAmount}`;
    return convertedAmount;
}

// VND to KWR
function vndToKrw() {
    let result = amountInput.value;
    let convertedAmount = result / 19000;
    return convertedAmount;
}

// KWR to VND
function krwToVnd() {
    let result = amountInput.value;
    let convertedAmount = result * 19000;
    return convertedAmount;
}


// Format currency
function formatCurrency(type, value) {
    const formatter = new Intl.NumberFormat(type, {
        currency: type,
        style: "currency"
    });
    return formatter.format(value);
}



function convert() {
    let fromCurrency = document.querySelector('input[name="fromCurrency"]:checked');
    let toCurrency = document.getElementById("toCurrency");

    if (fromCurrency.value === "VND" && toCurrency.value === "USD") {
        convertedMoney = vndToUsd();
        formatamount = formatCurrency(toCurrency.value, convertedMoney);
    } else if (fromCurrency.value === "USD" && toCurrency.value === "VND") {
        convertedMoney = usdToVnd();
        formatamount = formatCurrency(toCurrency.value, convertedMoney);
    } else if (fromCurrency.value === "VND" && toCurrency.value === "KRW") {
        convertedMoney = vndToKrw();
        formatamount = formatCurrency(toCurrency.value, convertedMoney);
    } else if (fromCurrency.value === "KRW" && toCurrency.value === "VND") {
        convertedMoney = krwToVnd();
        formatamount = formatCurrency(toCurrency.value, convertedMoney);
    } else {
        alert("You typed the wrong currency or data");
        return;
    }

    moneyResult.innerHTML = `${amountInput.value} ${fromCurrency.value} is same amount with ${formatamount}`
}