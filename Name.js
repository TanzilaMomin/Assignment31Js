//Reverse Name//
const names="deen"
const revStr=names.split('').reverse();
const newStr=revStr.map((item,index)=>index===0 ? item.toUpperCase() :item.toLowerCase());
console.log(`Reverse letter with Capitalized from "Deen" TO ${newStr.join('')}`)


//Print unique letter//
const In="INDIA IS BHARAT"
const unique1=[...new Set(In)]
console.log(`Print Unique letter from INDIA IS BHARAT ==> ${unique1.join('')}`)


//Sort and Reverse this arr//

const arr=[4,5,6,7,8,1,4,2];
const unique2=[...new Set(arr)];
const sorted=unique2.sort()
console.log(`sort and reverse ===>  ${sorted.reverse()}`)

//print second and third highest number//

const num=[4,5,6,7,8,1,4,2];
const unique3=[...new Set(num)]
const sorted2=unique3.sort();
console.log(`Second Highest Number ==> ${sorted2.reverse()[1]}`)
console.log(`Third Highest Number ==> ${sorted2.reverse()[2]}`)

//print second and third lowest number//

const num2=[4,5,6,7,8,1,4,2];
const unique4=[...new Set(num2)];
const sorted3=unique4.sort();
console.log(`Second Lowest Number ==>${unique4.sort()[1]} `)
console.log(`Third Lowest Number ==>${unique4.sort()[2]}`)
