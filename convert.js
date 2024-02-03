// inch convert to feet
function inchToFeet(inch){
    let feets = inch / 12;
    let feet = parseInt(feets);
    let inches = inch % 12;
    console.log(`The boy is: ${feet} feet and ${inches} inches.`);
}

inchToFeet(75);

//miles to kilo
function milesToKilo(miles){
    let kilo = miles * 1.60934;
    console.log(`Total: ${kilo} kilo.`);
}
milesToKilo(3);

//kelo to miles
function kiloToMiles(kilo){
    let mile = kilo * 0.62137119;
    console.log(`Total: ${mile} mile.`);
}