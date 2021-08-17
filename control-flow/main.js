/* const counter = ;

if(counter){
    console.log("runs")
};


const zero = 0 //falsey
const emptyString = "" //falsey
const noValue = undefined //falsey
const noValueYet = null //falsey
const noTrue = false //falsey

if (counter === 0) {
    // Do something
    // Make the message explode
}

if (!counter) {
    //Do something
    //Make the messsage explode
}

*/

// Grade calculator for students
// Where they input there grade and find out percentages
// Grading system (A - E)

/*let grade = "A";
// This will get changed inside the switch case
let percentage;

switch (grade) { 
    case 'A':
        percentage = "90-100%";
        break;
    case 'B':
        percentage = "75-90%";
        break;
    case 'C':
        percentage = "50-74%";
        break;
    case 'D':
        percentage = "25-49%";
        break;
    case 'E':
        percentage = "0-24%";
        break;
}

console.log(percentage); */

const nameTagOption = "Timothy";

let isValid;

const getIsValidOnNameTag = () => {
    if (nameTagOption.lenght <= 8 && nameTagOption[0] === nameTagOption[0].toUpperCase()){
        isValid = true;
    }else{
        isValid = false;
    }
};

getIsValidOnNameTag();

console.log(isValid)








