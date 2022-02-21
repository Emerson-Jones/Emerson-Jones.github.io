function scriptTest() 
{
    alert("Hey my script is running");
}
function message() 
{
    let mood = document.getElementById("mood").value;
    let name = document.getElementById("name").value;
    let message = "The Emerald Jackals welcomes you, " + name + "!" + " We're glad you are doing " + mood;
    document.getElementById("welcome").innerHTML = message;
}
function num_jackals() 
{
    var integer = Math.floor(Math.random() * 6);
    document.getElementById("response").innerHTML = "There are " + integer + " Jackals";
}
function help() 
{
    var userEntry = prompt("What do you need help with?");
    document.getElementById("response").innerHTML = "A Jackal will help you with " + userEntry + " soon";
}
function colors()
{
    var integer = Math.floor(Math.random() * 5);
    const colors = ["0B5D1E", "A4F9C8", "7698B3","141B41","50C878"];
    randomColor = colors[integer];
    document.getElementById("response").innerHTML = "A has for a color we use on our site is " + randomColor;
}
function page()
{
    var integer = Math.floor(Math.random() * 6);
    if(integer == 0)
    {
        window.open("introduction.html");
    }
    if(integer == 1)
    {
        window.open("contract.html");
    }
    if(integer == 2)
    {
        window.open("tables.html");
    }
    if(integer == 3)
    {
        window.open("forms.html");
    }
    if(integer == 4)
    {
        window.open("website_evaluations.html");
    }
    if(integer == 5)
    {
        window.open("index.html");
    }
    if(integer == 6)
    {
        window.open("brand-emerald-jackal.html");
    } 
}
function validateEntry()
{
    do
    {
        var sides = prompt("The Emerald Jackal would like you to enter the number of sides from 1 to 10");
        sides = Math.abs(sides);
        if (isNaN(sides))
        {
            alert("Number of sides must be a number");
        }
        if (sides > 10)
        {   
            alert("Must be 10 or less");
        }
    }
    
    while( isNaN(sides) || (sides > 10));
    return sides;
}
function getShape(sides)
{
    if(sides == 1)
    {
        alert("it is a monogon");
    }
    if(sides == 2)
    {
        alert("it is a bigon");
    }
    if(sides == 3)
    {
        alert("it is a trigon");
    }
    if(sides == 4)
    {
        alert("it is a tetragon");
    }
    if(sides == 5)
    {
        alert("it is a pentagon");
    }
    if(sides == 6)
    {
        alert("it is a hexagon");
    }
    if(sides == 7)
    {
        alert("it is a heptagon");
    }
    if(sides == 8)
    {
        alert("it is a octagon");
    }
    if(sides == 9)
    {
        alert("it is a enneagon");
    }
    if(sides == 10)
    {
        alert("it is a decagon");
    }
    
}