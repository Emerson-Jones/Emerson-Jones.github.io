var peopleAdded = [];
var salaryAdded = [];
var people = ["Emerson Jones","Noah Millen","Ben Mucha","Chris Smith", "David Thompson","Gracy Garcia","Emma Williams"];
var salary = [216000,144000,108000,96000,96000,96000,96000];
var info;

document.getElementById("addSalary").onclick = addSalary;
document.getElementById("displayResults").onclick = displayResults;
document.getElementById("displaySalary").onclick = displaySalary;

function addSalary()
{
    var index = -1;
    info = document.getElementById("employee").value;
    if(checkList())
    {
        return;
    }
    if(info == "Emerson Jones")
    {
        index = 0;
    }
    if(info == "Noah Millen")
    {
        index = 1;
    }
    if(info == "Ben Mucha")
    {
        index = 2;
    }
    if(info == "Chris Smith")
    {
        index = 3;
    }
    if(info == "David Thompson")
    {
        index = 4;
    }
    if(info == "Gracy Garcia")
    {
        index = 5;
    }
    if(info == "Emma Williams")
    {
        index = 6;
    }
    peopleAdded.push((people[index]));
    salaryAdded.push(salary[index]);
}

function displayResults()
{  
    document.getElementById("results").innerHTML = "The average salary is " + averageSalary() + ". " + peopleAdded[highestSalary()] + " has the highest salary and it is "+ salaryAdded[highestSalary()];
}

let output = "<table><tr> <th>Employee</th> <th>Salary</th></tr>"
function displaySalary()
{
    for(var i = 0; i < peopleAdded.length; i++)
    {
        output += "<tr><td>"+ peopleAdded[i]+ "</td><td>" + salaryAdded[i]+ "</td></tr>"
    }
    document.getElementById("salaryTable").innerHTML = output;
}

function checkList()
{
    for(i = 0; i < peopleAdded.length; i++)
    {
        if(info == peopleAdded[i])
        {
            return true;
        }
    }
    return false;
}

function averageSalary()
{
    var total = 0;
    for(i = 0; i < salaryAdded.length;i++)
    {
        total += salaryAdded[i];
    }
    total = (total/(salaryAdded.length));
    return total;
}
function highestSalary()
{
    var high = 0;
    for(i = 0; i < salaryAdded.length;i++)
    {
        if(salaryAdded[high] < salaryAdded[i])
        {
            high = i;
        }
    }
    return high;
}