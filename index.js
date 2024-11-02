// Calculator Program

const display = document.getElementById('display');
// gets the first matching element

function appendToDisplay(input){
    // parameter ins input because you are passing in a character to the calculator
    display.value += input;
    // shows the value of the display + the input
}

function clearDisplay(){
    display.value = "";
    // makes the display no characters
}

function calculate(){
    try{
    display.value = eval(display.value);
    // eval calculates whatever is on the display
    }
    
    catch(error){
        display.value = "Error";
    }
}
