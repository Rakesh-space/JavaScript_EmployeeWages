//UC1 -Checked Employee is present or not
//constant variable
/*const IS_ABSENT = 0;
let empCheck = Math.floor(Math.random()*10) % 2;
if (empCheck == IS_ABSENT)
{
    console.log("Employee is Absent");
}
else 
{
    console.log("Employee is Present");
}*/

//UC2 -Calculate Daily Wage
//constant variable
/*const IS_FULL_TIME = 1;
const IS_PART_TIME = 2;
const WAGE_PER_HOUR = 20;

let empHrs = 0;
let empCheck = Math.floor(Math.random()*10) % 3;
switch (empCheck)
{
    case IS_FULL_TIME:
        empHrs = 8;
        break;
    case IS_PART_TIME:
        empHrs = 4;
        break;
    default:
        empHrs = 0;
}
let empWage = empHrs * WAGE_PER_HOUR;
console.log("Employee Wage : " +empWage);*/

//UC3 -Calculate Daily Wage by using function
//constant variables
/*const IS_FULL_TIME = 1;
const IS_PART_TIME = 2;
const WAGE_PER_HOURS = 20;
const NUM_OF_WORKING_DAYS = 28;
const MAX_HRS_PER_MONTHS = 100;

let empHrs = 0;
let empCheck = Math.floor(Math.random()*10) % 3;
//This function for return working hours
function getWorkingHours(empCheck)
{
    switch(empCheck)
    {
        case IS_FULL_TIME:
            return 8;
        case IS_PART_TIME:
            return 4;
        default:
            return 0;
    }
}

//this function for daily wage of employee
function getEmpWage(empHrs)
{
    return empHrs * WAGE_PER_HOURS;
}
console.log("Employee Wage : " +empWage);*/


//UC4 -Calculate monthly total employee wage
//constant variables
const IS_FULL_TIME = 1;
const IS_PART_TIME = 2;
const WAGE_PER_HOURS = 20;
const NUM_OF_WORKING_DAYS = 20;

//This function for return working hours
function getWorkingHours(empCheck)
{
    switch(empCheck)
    {
        case IS_FULL_TIME:
            return 8;
        case IS_PART_TIME:
            return 4;
        default:
            return 0;
    }
}

let empHrs = 0;

for (let day=0; day<NUM_OF_WORKING_DAYS; day++)
{
    //gives random value
    let empCheck = Math.floor(Math.random() * 10) % 3;
    //calling function
    empHrs += getWorkingHours(empCheck);
}

//calculating employee wage
let empWage = empHrs * WAGE_PER_HOURS;
console.log("Total Hours: " +empHrs+"\nEmployee Monthly Wage: " + empWage);