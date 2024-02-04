// cheack and remove those numbers that are inside the varibales
let biriyaniKhorList = ['nayeem', 'zioun', 'zioun', 'tishat', 'rohan', 'rohan', 'rafi', 'raif'];

function duplicateCheack(names){
    let biriyaniKhorName = [];
    for(data of names){
        if(biriyaniKhorName.includes(data) === false){
            biriyaniKhorName.push(data);
        }
    }
    return biriyaniKhorName;
}
console.log(duplicateCheack(biriyaniKhorList));