
/* Execute the function to run and display the countdown clock */
window.alert("Welcome to My Calculator")

/* Execute the function to run and display the countdown clock */
runClock();
setInterval("runClock()", 1000);

/* Function to create and run the countdown clock */
function runClock() {
 
/* Store the current date and time */    
var currentDay = new Date();
var dateStr = currentDay.toLocaleDateString();
var timeStr = currentDay.toLocaleTimeString();

document.getElementById("dateNow").innerHTML =
dateStr + "<br />" + timeStr;
}

function addValue(){
    // get the operands value
    var operand1 = document.getElementById("inp1").value;
    var operand2 = document.getElementById("inp2").value;

    // parse to integer
    val1 = parseInt(operand1, 10);
    val2 = parseInt(operand2, 10);

    // perform operation
    var result = val1 + val2;
    document.getElementById("sumplace").value = val1 + " + " + val2 + " = " + result;
}
function multValue(){
    // get the operands value
    var operand1 = document.getElementById("inp1").value;
    var operand2 = document.getElementById("inp2").value;

    // parse to integer
    val1 = parseInt(operand1, 10);
    val2 = parseInt(operand2, 10);

    // perform operation
    var result = val1 * val2;
    document.getElementById("sumplace").value = val1 + " x " + val2 + " = " + result;
}
function divValue(){
    // get the operands value
    var operand1 = document.getElementById("inp1").value;
    var operand2 = document.getElementById("inp2").value;

    // parse to integer
    val1 = parseInt(operand1, 10);
    val2 = parseInt(operand2, 10);

    // perform operation
    var result = val1 / val2;
    document.getElementById("sumplace").value = val1 + " : " + val2 + " = " + result;
}
function clearValue(){
    document.getElementById("sumplace").value = "";
    document.getElementById("inp1").value = "";
    document.getElementById("inp2").value = "";
}