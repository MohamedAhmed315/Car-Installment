var carprice = 0;
var installmentamount = 0;
var monthcount = 0;
var downpayment = 0;
var interest = 0;
var monthlyamount = 0;

function getData() {
    carprice = document.getElementById("price").value;
    downpayment = document.getElementById("down-payment").value;
    monthcount = document.getElementById("months-count").value;
    interest = document.getElementById("interest").value;
    // console.log(carprice);
    // console.log(downpayment);
    // console.log(monthcount);
    // console.log(interest);
}

function calculate() {
    var installmentrest = carprice - downpayment;
    var intersetamount = (installmentrest * interest) / 100;
    var restamount = installmentrest + intersetamount;
    monthlyamount = restamount / monthcount;
}

function the_result() {
    getData();
    calculate();
    document.getElementById("result").innerHTML = "$" + monthlyamount;
}

function clearData() {
    document.getElementById("price").value = "";
    document.getElementById("down-payment").value = "";
    document.getElementById("months-count").value = "";
    document.getElementById("interest").value = "";
    document.getElementById("result").innerHTML = "$0";
}

