let allButtons=document.querySelectorAll('.btn')
let InputValue=document.querySelector('#display')
//console.log(allButtons)
let ButtomValue;
allButtons.forEach(element => {
    element.addEventListener('click',(e)=>{
        ButtomValue= e.target.innerText
        if(ButtomValue==="="){
            InputValue.value=Calculation()
            ButtomValue=""
            

        }
        if (ButtomValue==='C') {
            InputValue.value=""
            
        } 
        else{
            console.log(ButtomValue)
            changingInput()
        }
        
    })
    
    
});

function Calculation(){
let CalculatedAmount=new Function(`return ${InputValue.value}`)()
return CalculatedAmount
console.log(CalculatedAmount)
}
function changingInput (){
InputValue.value +=ButtomValue
console.log(InputValue.value)}
