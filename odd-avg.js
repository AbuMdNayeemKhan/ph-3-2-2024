// function takes an array as parameter
// give me the average of the odd numbers in the array

let numbers = [11, 22, 33, 44, 55, 66, 77, 88, 99, 100];

function oddAvg(numbers){
    let oddNum = [];
    for(num of numbers){
        if(num % 2 === 0){
            oddNum.push(num);
        }
    }
    let addOddNum = 0;
    for (num of oddNum){
        addOddNum += num;
    }
    let avgAddOddNum = addOddNum / oddNum.length;
    return avgAddOddNum;
};
console.log(oddAvg(numbers));