/*console.dir(document.body);
console.log(document.body);*/
// DOM Manipulation
/*select id = document.getElementById("myid")
select class = document.getElementsByClassName("myclass")
select tag = document.getElementsByTagName("p") 
querySelector = document.querySelector("myId/myClass/myTag")-- return first element
= document.querySelectorAll("myId/myClass/myTag")--return node list*/

/*let firstEl = document.querySelector("#myId");
console.dir(firstEl);*/
//id = #fun use -- unique, class--collection array

//Dompart:2 -- Manipulation -->Attributes--getAttribute(attr) to get attr value,setAttribute(attr,value)--set attr value --> style -->node.style//
/*Insert Elements -->let el = document.createElement("div")
node.append(el)--adds end of Node,
node.prepend(el)--adds start of node,
node.before(el)--adds before node,
node.after(el)--adds after node,
delete Element --- node.remove()--remove node*/
let newBtn = document.createElement("button");
newBtn.innerText = "click me";

newBtn.style.color="white";
newBtn.style.backgroundColor="red";
document.querySelector("body").prepend(newBtn);