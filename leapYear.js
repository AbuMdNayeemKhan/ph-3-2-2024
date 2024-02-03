//simple
//cheack leapYear
function isLeapYear (year) {
    if(year % 4 === 0){
        return true;
    } else{
        return false;
    }
} 
console.log(isLeapYear(2022));

//midium
//cheack leapYear
function aIsLeapYear (year) {
    if(year % 4 === 0 && year % 100 !== 0){
        return true;
    } else{
        return false;
    }
}
console.log(aIsLeapYear(2022));