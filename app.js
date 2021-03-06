var displaySeries = document.querySelector("#output-series");
var getButton = document.querySelector("#btn-series");
var inputSeriesNumber = document.querySelectorAll(".input-series");
var SubmitButton = document.querySelector("#submit-button");
var displayResult = document.querySelector("#display");

var answerOne;
var answerTwo;
var answerThree;
var numberOne;
var score ;




function getRandomNumber(){
    return Math.floor(Math.random()* (5 - 1 +1)  )+ 1 ;
}

function showSeries(numberOne, numberTwo , numberThree , numberFour){
    displaySeries.innerHTML = `${numberOne} , ${numberTwo} , ${numberThree} , ${numberFour} `
}
// ----- logic of series ------------------
function seriesOneLogic(){
      answerOne = numberOne * 2 ;
      answerTwo = numberOne * 3;
      answerThree = numberOne * 4 ;
}

function seriesTwoLogic(){
     answerOne = ( numberOne * 2 ) - 3 ;
     answerTwo = ( numberOne * 3 ) - 4 ;
     answerThree = ( numberOne * 4 ) - 5 ;
}

function seriesThreeLogic(){
    answerOne = ( numberOne * numberOne ) + 1;
    answerTwo = ( numberOne * numberOne * numberOne ) + 2 ;
    answerThree = ( numberOne * numberOne * numberOne * numberOne) + 3;
}

function seriesFourLogic(){
    answerOne = numberOne + 3;
    answerTwo = numberOne + 6;
    answerThree = numberOne + 9 ;
}

function seriesFiveLogic(){
    answerOne = (numberOne + 72);
    answerTwo = (numberOne + 154);
    answerThree = (numberOne + 216);
}
// ------ formation of logic over ----------

function reset(){
    score = 0;
    for( var i = 1 ; i < 4 ; i++){
          inputSeriesNumber[i].style.color = "black";
          inputSeriesNumber[i].value = null;
    }

}




function getSeriesHandler(){
 reset();
 var randomNumber = getRandomNumber();
 numberOne = getRandomFromOneTo100();
 inputSeriesNumber[0].value = numberOne;
 
 
    switch(randomNumber) {
        case 1 : showSeries(6,12,18,24);
                 seriesOneLogic();
                 break;
        case 2 : showSeries(6,9,14,19);
                 seriesTwoLogic();
                 break;
        case 3 : showSeries(8,65,514,4099);
                 seriesThreeLogic();
                 break;
        case 4 : showSeries(5,8,11,14);
                 seriesFourLogic();
                 break; 
        case 5 : showSeries(3,75,157,219);
                 seriesFiveLogic();
                 break;                                   
    }

  
}

function getRandomFromOneTo100 (){
    return Math.floor( Math.random() * ( 100 ) ) + 1;
}

function checkOneAnswer( inputOne , inputTwo ){
      if(Number(inputOne.value) === inputTwo){
        score = score + 50;
        inputOne.style.color = "green";
       

      }else {
        inputOne.style.color = "red";
       
    }
}

function checkAllAnswer(inputOne, inputTwo, inputThree){
   checkOneAnswer(inputOne,answerOne);
   checkOneAnswer(inputTwo,answerTwo);
   checkOneAnswer(inputThree,answerThree);
   
}



function submitHandler(){
     
   score = 0;
   
    checkAllAnswer(inputSeriesNumber[1],inputSeriesNumber[2],inputSeriesNumber[3]);
    displayResult.innerHTML = " Your score is " + score;
}

getButton.addEventListener("click", getSeriesHandler);
SubmitButton.addEventListener("click", submitHandler);