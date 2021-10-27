"use Strict"

const numbers = generateRandomNumbers(0, 100);
// console.log("log dell'array numbers");

alert(`Rememebr these numbers: ${numbers[0]}, ${numbers[1]}, ${numbers[2]}, ${numbers[3]}, ${numbers[4]}`);

setTimeout(getAndCompareNumbers, 30000);

function getAndCompareNumbers(){
    let userNumbers = [];
    let arrayResults=[];
    for(let i=0; i<numbers.length; i++){
        const userNumber = prompt("Insert a number:");
        userNumbers.push(parseInt(userNumber))
        // console.log("console lo go di userNumbers", userNumbers);
    }

    userNumbers.forEach(number => {
        
        if(numbers.includes(number) && !arrayResults.includes(number)){
            arrayResults.push(number);
        }
    });

    alert( `Your results!
You inserted ${arrayResults.length} correct numbers and they are:
${arrayResults.join()}`);

}

function generateRandomNumbers(min, max){
    let randomArray=[];
    while(randomArray.length < 5){
        const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
        if(!randomArray.includes(randomNumber)){
            randomArray.push(randomNumber);
        }
        // console.log("log di random array", randomArray);
    }
    return randomArray;
}