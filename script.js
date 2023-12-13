let add=document.querySelector(".btn1");
let reset=document.querySelector(".btn2");
let minus=document.querySelector(".btn3");
let disp=document.querySelector(".d");


add.addEventListener("click",()=>{
    let strvalue= disp.innerText
    let numval=Number(strvalue);
    numval=numval+1;
    disp.innerText=numval;
})
reset.addEventListener("click",function btn2(){
    disp.innerText=0;
})

minus.addEventListener("click",()=>{
    let strvalue= disp.innerText
    let numval=Number(strvalue);
    numval=numval-1;
    disp.innerText=numval;
})