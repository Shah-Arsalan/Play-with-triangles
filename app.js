const inputs = document.querySelectorAll(".angle-input");
const button = document.querySelector("#check");
const outputbox = document.querySelector(".output")

function sum (number1, number2 , number3){
    return number1+number2+number3;
    
}

button.addEventListener("click", function calculate (){
  const sumOfAngles = sum(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));
  if (sumOfAngles == 180){
      outputbox.innerText = "These angles form a triangle"

  }else{
    outputbox.innerText = "These angles do not form a triangle"
  }

});

