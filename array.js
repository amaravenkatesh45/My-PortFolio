/*Array methods: Push(): add to last element of array
//Pop(): delete from end &return
//toString: converts array to string
//Concat(): Join multiple arrays and return result
//Unshift: add to start--push
//shift: delete from start and return
//slice: returns a piece of the array --slice(start,end)
//splice: change original array(add,remove,replace) -- splice(start,delCount,newEl1)*/
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
companies.shift();
companies.splice(2,1,"ola");
companies.push("Amazon");