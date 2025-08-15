//event -- change in state of Object--MOuse events,keyboard,form,print,..//
/*node.event = () => {
    //handle here
    }*/
/*node.event = (e) => {
    //handle here
    } --e.target,e.type,e.clientX,e.clientY*/
//node.addEventListener(event, callback),node.removeEventListener(event,callback) --callback reference should be same to remove//
let modeBtn = document.querySelector("#mode");
let currMode ="light";

modeBtn.addEventListener("click", () => {
    if(currMode === "light"){
        currMode= "dark";
        document.querySelector("body").style.backgroundColor="black";
    }else {
        currMode = "light";
        document.querySelector("body").style.backgroundColor="white";
    }
    console.log(currMode);
});