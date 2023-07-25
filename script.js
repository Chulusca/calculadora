let displayNum = "0";

function insertarEnDisplay(value){
    const operadores = ['+', '-', '*', '/', ','];
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