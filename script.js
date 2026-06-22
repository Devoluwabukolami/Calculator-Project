let display = document.getElementById("display");

function appendValue(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function deleteLast(){
    display.value = display.value.slice(0, -1);
}

function calculateResult(){
    try{
        let result=eval(display.value);
        display.value=result;
        display.style.transform="scale(1.05)";
        setTimeout(() => {
            display.style.transform="scale(1)";
        }, 200);
    }
    catch{
        display.value = "Error";
    }
}
function squareRoot() {
    try{
        display.value = Math.sqrt(Number(display.value));
    }catch{
        display.value = "Error";
    }
}
function square() {
    try{
        display.value=
        Number(display.value)**2;
    }catch{
        display.value="Error";
    }
    }
    function percentage() {
        try{
            display.value = Number(display.value) / 100;
        }catch{
            display.value = "Error";
        }
    }
    function insertPi() {
        display.value += Math.PI.toFixed(6);
    }
    function copyResult() {
        navigator.clipboard.writeText(display.value);
        alert("Result copied!");
    }