let display=document.querySelector("input");
let btns=document.querySelectorAll("button");
btns.forEach(btn =>{
    btn.addEventListener("click",()=>{
        value=btn.innerText;
        if(value=="C"){
            display.value=" ";
        }
        else if(value =="=")
        {
            try{
            display.value = calculation(display.value);
            }catch{
                display.value="Error";
            }
        }
        else{
            display.value +=value;
        }
    });
    
});
function calculation(expression) {
    return (eval(`${expression}`));
}


