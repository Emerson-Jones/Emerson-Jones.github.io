var temp1 = "";
var temp2 = "";
var onFirst = true;
var operator = "";

window.onload = function()
{
    document.getElementById("zero").onclick = zero;
    document.getElementById("one").onclick = one;
    document.getElementById("two").onclick = two;
    document.getElementById("three").onclick = three;
    document.getElementById("four").onclick = four;
    document.getElementById("five").onclick = five;
    document.getElementById("six").onclick = six;
    document.getElementById("seven").onclick = seven;
    document.getElementById("eight").onclick = eight;
    document.getElementById("nine").onclick = nine;
    document.getElementById("divide").onclick = divide;
    document.getElementById("multiply").onclick = multiply;
    document.getElementById("add").onclick = add;
    document.getElementById("subtract").onclick = subtract;
    document.getElementById("empty").onclick = empty;
    document.getElementById("enter").onclick = enter;
}

function empty()
{
    temp1 = "";
    temp2 = "";
    onFirst = true;
    operator = "";
    document.getElementById("display").innerHTML = "";
}

function add()
{
    if(temp1 == "")
    {
        return;
    }
    temp1 = parseInt(temp1);
    onFirst = false;
    operator = "add";
}

function subtract()
{
    if(temp1 == "")
    {
        return;
    }

    temp1 = parseInt(temp1);
    onFirst = false;
    operator = "subtract";
}

function multiply()
{
    if(temp1 == "")
    {
        return;
    }
    temp1 = parseInt(temp1);
    onFirst = false;
    operator = "multiply";
}

function divide()
{
    if(temp1 == "")
    {
        return;
    }
    temp1 = parseInt(temp1);
    onFirst = false;
    operator = "divide";
}

function enter()
{
    if(temp2 == ""){
        return;
    }
    var result;
    //onFirst = true;
    temp2 = parseInt(temp2);
    if(operator == "add")
    {
       result = temp1 + temp2; 
       document.getElementById("display").innerHTML = result;
       temp1 = result;
    }

    if(operator == "subtract")
    {
       result = temp1 - temp2; 
       document.getElementById("display").innerHTML = result;
       temp1 = result;
    }

    if(operator == "multiply")
    {
       result = temp1 * temp2; 
       document.getElementById("display").innerHTML = result;
       temp1 = result;
    }

    if(operator == "divide")
    {
       result = temp1 / temp2; 
       document.getElementById("display").innerHTML = result;
       temp1 = result;
    }
    temp2 = ""
}

function zero()
{
    if(onFirst)
    {
        temp1 = temp1 + "0";
        document.getElementById("display").innerHTML = temp1;  
    }
    else
    {
        temp2 = temp2 + "0"
        document.getElementById("display").innerHTML = temp2;
    }
}

function one()
{
    if(onFirst)
    {
        temp1 = temp1 + "1";
        document.getElementById("display").innerHTML = temp1;  
    }
    else
    {
        temp2 = temp2 + "1"
        document.getElementById("display").innerHTML = temp2;
    }
}

function two()
{
    if(onFirst)
    {
        temp1 = temp1 + "2";
        document.getElementById("display").innerHTML = temp1;  
    }
    else
    {
        temp2 = temp2 + "2"
        document.getElementById("display").innerHTML = temp2;
    }
}

function three()
{
    if(onFirst)
    {
        temp1 = temp1 + "3";
        document.getElementById("display").innerHTML = temp1;  
    }
    else
    {
        temp2 = temp2 + "3"
        document.getElementById("display").innerHTML = temp2;
    }
}

function four()
{
    if(onFirst)
    {
        temp1 = temp1 + "4";
        document.getElementById("display").innerHTML = temp1;  
    }
    else
    {
        temp2 = temp2 + "4"
        document.getElementById("display").innerHTML = temp2;
    }
}

function five()
{
    if(onFirst)
    {
        temp1 = temp1 + "5";
        document.getElementById("display").innerHTML = temp1;  
    }
    else
    {
        temp2 = temp2 + "5"
        document.getElementById("display").innerHTML = temp2;
    }
}

function six()
{
    if(onFirst)
    {
        temp1 = temp1 + "6";
        document.getElementById("display").innerHTML = temp1;  
    }
    else
    {
        temp2 = temp2 + "6"
        document.getElementById("display").innerHTML = temp2;
    }
}

function seven()
{
    if(onFirst)
    {
        temp1 = temp1 + "7";
        document.getElementById("display").innerHTML = temp1;  
    }
    else
    {
        temp2 = temp2 + "7"
        document.getElementById("display").innerHTML = temp2;
    }
}

function eight()
{
    if(onFirst)
    {
        temp1 = temp1 + "8";
        document.getElementById("display").innerHTML = temp1;  
    }
    else
    {
        temp2 = temp2 + "8"
        document.getElementById("display").innerHTML = temp2;
    }
}

function nine()
{
    if(onFirst)
    {
        temp1 = temp1 + "9";
        document.getElementById("display").innerHTML = temp1;  
    }
    else
    {
        temp2 = temp2 + "9"
        document.getElementById("display").innerHTML = temp2;
    }
}


