let displayNum = "0";
let memoria = "";


function insertarEnDisplay(value){
    const operadores = ['+', '-', '*', '/', '.'];
    var ultChar = displayNum.slice(-1)
    if(operadores.includes(ultChar) && operadores.includes(value)){
        return;
    }
    else if(displayNum === "0" || displayNum === "Error"){
        displayNum = value;
    }
    else{
        displayNum += value;
    }
    actualizarDisplay();
}

function actualizarDisplay(){
    document.getElementById("display").innerText = displayNum;
}

function clearD(){
    displayNum = "0";
    actualizarDisplay();
}

function calcular(){
    try{
        displayNum = eval(displayNum).toString();
        actualizarDisplay();
    }
    catch(error){
        displayNum = "Error";
        actualizarDisplay();
    }
}

function delDisplay(){
    if(displayNum != "0" && displayNum != "Infinity"  && displayNum != "Error" ){
        displayNum = displayNum.slice(0, -1);
    }  
    if(displayNum == "" || displayNum == "Infinity"|| displayNum == "Error"){
        displayNum = "0";
    }
    actualizarDisplay();
}

function cargarMemoria(){
    const bool = (displayNum.includes("*") || displayNum.includes("/") ||displayNum.includes("+") ||displayNum.includes("-"))
    if(bool){
        calcular()
        memoria = displayNum;
    }
    else{
        memoria = displayNum;
    }
}
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
    
    const themeLink = document.getElementById('theme');
    const currentTheme = themeLink.getAttribute('href');
    const darkTheme = 'style-dark.css';
    const lightTheme = 'style.css';

    // Cambiar el archivo CSS según el tema actual
    if (currentTheme === lightTheme) {
        themeLink.setAttribute('href', darkTheme);
    } else {
        themeLink.setAttribute('href', lightTheme);
    }
}
