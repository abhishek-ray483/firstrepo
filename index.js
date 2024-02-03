const quizDB = [
    {

    Qestion: "Q1: What is the full form of HTML?",
    a:"Hello to my land",
    b:"Hey Text Markup Language",
    c:"HyperText Makup Language",
    d:"HyperText Markup Language",
    ans:"ans4"

    },

    {

        Qestion: "Q2: What is the full form of CSS?",
        a:"Cascading Style Sheets",
        b:"Cascading Style Sheep",
        c:"Cartoon Style Sheets",
        d:"Cascading Supper Sheets",
        ans:"ans1"
    
    },

    {
        Qestion: "Q3: What is the full form of HTTP?",
        a:"HyperText Trnasfer Product",
        b:"HyperText Test Protocol",
        c:"Hey Transfer Protocol",
        d:"HyperText Transfer Protocol",
        ans:"ans4"
    
    },

    {
        Qestion: "Q4: What is the full form of JS?",
        a:"Javascript",
        b:"JavaSuper",
        c:"JustScript",
        d:"JordenShoes",
        ans:"ans1"
    
    },

    {
        Qestion: "Q5:  Which of the following is correct about JavaScript?",
        a:"avaScript is an Object-Based language.",
        b:"avaScript is Assembly-language",
        c:"avaScript is an Object-Oriented language",
        d:"avaScript is a High-level language",
        ans:"ans1"
    
    },

    {
        Qestion: "Q6:Which of the following can be used to call a JavaScript Code Snippet? ",
        a:"Function/Method.",
        b:" Preprocessor.",
        c:"Triggering Event",
        d:"RMI",
        ans:"ans1"
    
    },
    {
        Qestion: "Q7:Which of the following is the property that is triggered in response to JS errors? ",
        a:"onclick.",
        b:" onerror.",
        c:"onmessage.",
        d:"onexception",
        ans:"ans2"
    
    },

    {
        Qestion: "Q8: In JavaScript, what will be used for calling the function definition expression:",
        a:"Function prototype.",
        b:" Function literal.",
        c:"onmessage.",
        d:"Function declaration",
        ans:"ans2"
    
    },

    {
        Qestion: "Q9:Which one of the following is not considered as 'statement'in the JavaScript?",
        a:"use strict.",
        b:"debugger.",
        c:"if.",
        d:"with",
        ans:"ans1"
    
    },
]; 
const question= document.querySelector(".question");
const option1 = document.querySelector("#optinon1");
 const option2 = document.querySelector("#optinon2");
 const option3 = document.querySelector("#optinon3");
 const option4 = document.querySelector("#optinon4");

 const submit = document.querySelector("#submit");

 const answers = document.querySelectorAll(".answer" );
 const showScore= document.querySelector('#showScore');
 

     let questioncount = 0;

    let score=0;


 const loadQuestion = () =>{
    // console.log(quizDB[0]. Qestion); display consloe par

      question.innerText =quizDB[questioncount].Qestion
      option1.innerText= quizDB[questioncount].a;
      option2.innerText= quizDB[questioncount].b;
      option3.innerText= quizDB[questioncount].c;
      option4.innerText= quizDB[questioncount].d;
 }
 
 loadQuestion();
 
  function getCheckAnswer(){
    
   let answer;
   answers.forEach((curAnsElem) =>{
    if(curAnsElem.checked){
        answer = curAnsElem.id;
    }
    
   })
   return answer;
 };
//refres fuction \

const deseletAll = () =>{
    answers.forEach( (curAnsElem) => curAnsElem.checked = false);
 }
   

 submit.addEventListener('click',() =>{
    const CheackedAnswer = getCheckAnswer();
    console.log( CheackedAnswer);

    //pahle answer ko checked karega after that 
    // next question ko load karega

    if(CheackedAnswer === quizDB[questioncount].ans){
        score++
    };
    
    //load kare se pahle hame checked ko unchecked karna padhega

    deseletAll();

    questioncount++

    if(questioncount < quizDB.length){
        loadQuestion();
    }
    else{
        showScore.innerHTML = ` 
        <h3> Your scored ${score}/${quizDB.length} 👌 </h3>
        <button class="btn" onclick="location.reload()">Play Again </button> 
        `;
        
         showScore.classList.remove('scoreArea');
    }

});