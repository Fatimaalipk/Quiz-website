// user na jis pa click kia hai correct answer hai ya nahi
    

const quizData = [
    {
      question: "What does HTML stand for?" ,
    option: [
       'Hypertext Markup Language', 
       'Hyper Transfer Markup Language', 
       'Hypertext Machine Language', 
       'HyperLink and text Language', 
    ], 
    correct: 0,
    },
    {
      question: "Which CSS Property is used to control the spacing between element?" ,
   option: ["margin", "padding", "spacing","border-spacing"] ,
   correct: 1,

    },
    {
      question: "What is the javascript function used to select an HTML element by ]its id?",
      option: [
        "document.query",
        "getElementById",
        "selectElement",
        "findElementByid",
      ],
      correct:1,
    },
    {
      question: "In React.js, which look is used to perform side effects in a fuction component?",
option:["useEffect","useState", "useContext","useReduser"],
correct: 0,
    },
{
  question:"which HTML tag used to create an orderd list?",
    option:["<ul>","<li>","<ol>","<dl>"],
    correct:0,

},
];

 

// ###########  #############
const quiz = document.querySelector('#quiz');
const scores = document.querySelector('.score');
const answerElm = document.querySelectorAll(".answer");
const [questionElm, option_1, option_2, option_3, option_4] = document.querySelectorAll("#question, #option_1, #option_2, #option_3, #option_4")

const submitbtn = document.querySelector("#submit");



let currentQuiz = 0;
let score = 0;
// step 3  loadquiz function

 const loadquiz = () => {
  const {question, option} = quizData[currentQuiz];


  console.log(question)

  // question
// questionElm.innerText = question;
   questionElm.innerText = `${currentQuiz + 1}:${question}`;
   scores.innerText = ` Score: ${score}/${quizData.length} `;
// option

  option.forEach((curOption, index) => (window[`option_${index + 1}`].innerText = curOption)
  )
 };

 loadquiz();


// step 4 Get selected Answer function on button click

const getselectedOption = () => {

let answerElement = Array.from(answerElm);
// answerElement.findIndex
 return answerElement.findIndex((curElem) => curElem.Checked)
};

// deselectedAnswer
// curElem.Checked  value = false ;
const deselectedAnswer = () => {
   return answerElm.forEach((curElem) => curElem.checked = false);
};

submitbtn.addEventListener('click', () => {
const selectedOptionIndex = getselectedOption();
console.log(selectedOptionIndex);

if(selectedOptionIndex === quizData[currentQuiz].correct){
score = score + 1;
}
score++;

currentQuiz++;
if(currentQuiz < quizData.length){
deselectedAnswer();
  loadquiz();
  
 
}
else{
  quiz.innerHTML = `<div id="result">
  <img src="./images (25).jpg" alt="flowers">
  <h2>Your Score: ${score}/${quizData.length} Correct Answer </h2>
  <p>Congratulation on comoletting the quiz !</p>
  <button class="reloade-button"onclick="
  location-reloade()">Play Again</button>
</div>` 

}
});