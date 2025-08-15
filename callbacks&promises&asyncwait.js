//async await >> promise chains >> clalback hell
//Synchronous --code runs sequence of instructions in program each instruction waitss for previous instruction to complete its execution.
//Asynchronous --imp instructions get blocked due to some prevoius instr which cause delay in ui.
/*console.log("one");
console.log("two");
console.log("three");*/
/*function hello(){
    console.log("hello");
}
setTimeout(()=> {
    console.log("hello");
}, 4000);*/
//callback -- is a function passed  as an argument to another function
/*function sum(a, b){
    console.log(a+b);
}
function calculator(a, b, sumCallback){
    sumCallback(a, b);
}
calculator(1, 2, sum);
//callback hell -- nested callbacks stacked below one another forming a pyramid structure
let age = 18;
if(age >= 16){
    if(age>=60){
        console.log("senior");
    }else{
        console.log("middle");
    }
    
}else{
    console.log("child")
}*/
/*for(let i=0; i<5; i++){
    let str="";
    for(let j=0; j<5; j++){
        str = str+j;
        console.log(j);
    }
    console.log(istr);
}*/
//promises -- eventual completion of task ,an object in JS, solution to callback hell//
/*let promise =new promise((resolve,reject) =>{...})
resolve and reject in js*/
//promise.then((res)=>{...})&promise.catch((err) =>{...})