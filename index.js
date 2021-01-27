// login button event handler
const loginBtn = document.getElementById('login');
loginBtn.addEventListener("click", function () {
    const loginAria = document.getElementById('login-box');
    loginAria.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
})

// deposit button event handler
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function () {
    const depositNumber = getInputNumber("depositAmount");
    spanTextUpdate("currentDeposit", depositNumber);
    spanTextUpdate("currentBalance", depositNumber);
    document.getElementById("depositAmount").value = "";
})
// withdraw button event handler
const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click", function () {
    const withdrawNumber = getInputNumber("withdrawAmount");
    spanTextUpdate("currentWithdraw", withdrawNumber);
    spanTextUpdate("currentBalance", withdrawNumber * -1);
    document.getElementById("withdrawAmount").value = '';
})

function getInputNumber(id) {
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}

function spanTextUpdate(id, depositNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = depositNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;
}