const QuizForm = document.querySelector(".form")
const CheckButton = document.querySector(".output")
elector(".button")
const OutputDiv = document.querySel
const rightanswers = ["3","180","isoceles","130"];

function answer (){
    let score = 0;
    let i = 0;
    const inputresults = new FormData(QuizForm);
    for (let value of inputresults.values()){
        for(let i = 0 ; i<=3;i++){
        if (value === rightanswers[i]){
            score = score + 1;     
            console.log(value)
            i= i +1;
        }
    }
    }//i= i +1;
    console.log(score)
    //OutputDiv.innerText = "Yeah Yeah you scored 4 points ... Don't brag about it"
    if (score === 4){
        OutputDiv.innerText = "Yeah Yeah you scored 4 points ... Don't brag about it"
    }else {
        OutputDiv.innerText = "Your Score is " + score + "..Oopsiee😁"
    }


}




CheckButton.addEventListener("click",answer);