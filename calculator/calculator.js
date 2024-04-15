let display= document.getElementById('result');
let input=document.querySelectorAll('number, number2');

let string="";
let arr = Arry.from('input');
arr.forEach(number,number2 => {
    number,number2.addEventlistener('click' ,(e) =>{
        if(e.terget.innerHTML == "="){
            string = aval(string);
            display.value = string;
        }
        else{
            string += e.terget.innerHTML;
            display.value = string;
        }
    })
});