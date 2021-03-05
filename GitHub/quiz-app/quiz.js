const quizData = [
    { question :"Grand Central Terminal, Park Avenue, New York is the world's;",

a:	"largest railway station", 
b:	"highest railway station",
c:	"longest railway station",
d:	"None of the above",
correct:"a"},
	
{ question :"Entomology is the science that studies ;",

a:	"Behavior of human beings",
b:	"Insects", 
c:	"The origin and history of technical and scientific terms",
d:	"The formation of rocks",
correct:"b"},
	
{ question :"For which of the following disciplines is Nobel Prize awarded?",

a:	"Physics and Chemistry",
b:	"Physiology or Medicine",
c:	"Literature, Peace and Economics",
d:	"All of the above", 
correct:"d"},

{ question :"Filaria is caused by;",

a:	"Bacteria",
b:	"Mosquito", 
c:	"Protozoa",
d:	"Virus",
correct:"b"},

{ question :"Which city will host the Summer Olympic Games 2024?",

a: "Prag",
b: "Roma",
c: "Paris",
d:  "Brussels ",
correct:"c"}
];
const quiz= document.getElementById("quiz");
const answerEl = document.querySelectorAll(".answer");// this is radio button
const questionEl=document.getElementById("question");
const a_text = document.getElementById("a_text"); // these are text inside the radio button
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submition = document.getElementById("submit");


// keep track all the current question
let currentQuiz = 0;
let score =0;

loadQuiz();
function loadQuiz () { // will be call everytime we submit
    //when we load we want questionEl to be quizdata of current question
deselectAnswers();
    const currentQuizData= quizData[currentQuiz];
questionEl.innerText=currentQuizData.question;
a_text.innerText=currentQuizData.a;
b_text.innerText=currentQuizData.b;
c_text.innerText=currentQuizData.c;
d_text.innerText=currentQuizData.d;
}
function getSelected() {
    
    let answer = undefined; 

    answerEl.forEach ((answerEl) =>{
        if(answerEl.checked){
            answer= answerEl.id
    }
    });
return answer;

}

function deselectAnswers() {
    answerEl.forEach((answerEl)=>{
answerEl.checked=false;
    });
    
}

//when you click the submit,next question comes
submition.addEventListener("click",()=> { // check to see the answer
const answer = getSelected();

if ( answer ){ // if we have an answer go the next question
    if (answer=== quizData[currentQuiz].correct){
        score++;
    }
    
    currentQuiz++;
if(currentQuiz < quizData.length){
loadQuiz();
} else{
    quiz.innerHTML= 
    `<h2> You answered correctly at ${score}/${quizData.length} questions.<h2>
    <button onclick="location.reload()"></button>`;
}
}
});