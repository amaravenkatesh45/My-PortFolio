
/*function sum(a,b){
    return a+b;
}
const arrowSum = (a,b) => {
    console.log(a+b);
};
function mul(a,b){
    return a*b;
}
const arrowMul = (a,b) => {
    console.log(a*b);
};*/
/*function countVowels(str){
    let count = 0;
  for(const char of str){
    if(char === "a"|| char === "e" || char ==="i" || char==="o" || char==="u"){
        count++;
    }
    }
    console.log(count);
}*/
/*let countVow = (str) => {
    console.log(str);
};*/

/*let arr = [1, 2, 3, 4, 5];

arr.forEach((val) => {
    console.log(val);
});*/

/*let nums = [2,3,4,5,6];
nums.forEach((num) => {
    console.log(num*num);
});*/
//map -- arr.map(callbackfun(valuee,index,array))

/*let marks =[98,97,90,85];
let newArr = marks.map((val) => {
    console.log(val*val);
});*/

//Filter -- create a new array of elements that give true condition

/*let nums = [1,2,3,4,5,6,7,8];
let newArray = nums.filter((val) => {
    console.log(val%2===0);
});*/

//Reduce -- perform some operations & reduces the array to single value

/*let arr = [1,3,5,4,6,8];
 const out = arr.reduce((prev, curr) => {
    return prev > curr? prev: curr;
 });
 console.log(out);*/

/*let arr = [97,98,90,90];
let newArray = arr.filter((val) => {
    return val > 90;
})
console.log(newArray);*/
let n = prompt("enter a number: ");
let arr = [];
for(let i=1; i<=n;i++){
    arr[i-1]=i;
}
console.log(arr);

