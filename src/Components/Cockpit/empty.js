let countStar = [];
let diamondLength = 17;

let temp = -1;

// for(let i = 1; i <= diamondLength; i++){
// if(i <= diamondLength/2){
// temp += 2;
// countStar[i-1] = temp;
// }
// else if ( i === (diamondLength+1)/2){
// temp += 2;
// countStar[i-1] = temp;
// }
// else{
// temp -= 2;
// countStar[i-1] = temp;
// }
// }

let temp1 = Math.floor(diamondLength/2);
let stringTemp = '';

let arrowFun = (len, temp) => {
let stringTempArrow = '';
for(let j = 1; j <= len - temp; j++){
if(j <= temp){
stringTempArrow += '  ';
} else {
stringTempArrow += '* ';
}
}
return stringTempArrow;
}

for(let i = 1; i <= diamondLength; i++){
if(i <= Math.floor(diamondLength/2)){
stringTemp = arrowFun(diamondLength, temp1);
--temp1;
} else if (i === Math.floor(diamondLength/2)+1){
for(let j = 1; j <= diamondLength; j++){
stringTemp += '* ';
}

} else {
++temp1;

stringTemp = arrowFun(diamondLength, temp1);
}
console.log(stringTemp);
stringTemp = '';
}





