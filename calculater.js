const display = document.querySelector('.display');

function displayKeys(key){
    display.value += key;
};

function clearDisplay(){
    display.value = '';
};

function RemoveLastDisplay(){
    display.value = display.value.toString().slice(0, -1);
}

function calculate(){
    try{
        display.value = eval(display.value);
    } 
    catch(error){
        console.log(error)
    };
};