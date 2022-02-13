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
    if(integer == 0){
        window.open("introduction.html");
    }
    if(integer == 1){
        window.open("contract.html");
    }
    if(integer == 2){
        window.open("tables.html");
    }
    if(integer == 3){
        window.open("forms.html");
    }
    if(integer == 4){
        window.open("website_evaluations.html");
    }
    if(integer == 5){
        window.open("index.html");
    }
    if(integer == 6){
        window.open("brand-emerald-jackal.html");
    }
    
}