import {num1,num2,operator,result } from "./index_variables";
num1=parseInt(num1)
num2=parseInt(num2)
// eval function Serach
export function calculator (num1,num2,operator){
    if(operator == "+"){
        result.value=num1+num2
    }
    else if (operator == "-"){
        result.value=num1-num2

    }
    else if (operator == "*"){
        result.value=num1*num2

    }
    else if (operator == "/"){
        result.value=num1/num2

    }
}