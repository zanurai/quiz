const quizDB = [
    {
        question: "Q1: What is the full form of HTML?",
        a: "Hello To My Land",
        b: "Hey Text Markup Language",
        c: "HyperText Markup Language",
        d: "Hypertext Markup Language",
        ans: "ans4"
    },
    {
        question: "Q2: What is the full form of css?",
        a: "Cascading Style Sheets",
        b: "Cascading Style sheep",
        c: "Cartoon Style sheets",
        d: "Cascading Super Sheets",
        ans: "ans1"
    },
    {
        question: "Q3: What is the full form of HTTP?",
        a: "Hypertext Transfer Product",
        b: "Hypertext Test Protocol",
        c: "Hey Transfer Product",
        d: "Hypertext Transfer Protocol",
        ans: "ans4"
    },
    {
        question: "Q4: What is the full form of js?",
        a: "JavaSuper",
        b: "JustScript",
        c: "JavaScript",
        d: "JordenShoot",
        ans: "ans3"
    },
    {
        question: "Q5: What is the full form of HIV?",
        a: "Human Immunodeficiency Viruses",
        b: "Human Immunity Viruses",
        c: "Human Iron Virus",
        d: "Human Immuno Viruses",
        ans: "ans1"
    }
];
const answers = document.querySelectorAll(".answer");
const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");
const showScore = document.querySelector("#showScore");
//const option5 = document.querySelector("#option5");


let questionCount = 0;
let score = 0;

const loadQuestion = () => {

    const questionList = quizDB[questionCount]
    question.innerHTML = questionList.question;

    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;
    //option5.innerHTML = questionList.e;

}
loadQuestion();

//which radio option/ which button is going to select
//to fineout the data or when user click the submit button

const getCheckAnswer = () => {
    let answer;



    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }
    });

    return answer
};
//remove the by default select
const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    //compare with given answer and load the next question on the sport

    if (checkedAnswer === quizDB[questionCount].ans) {
        score++;
    };
    questionCount++;

    //remove the by default  function call
    deselectAll();

    if (questionCount < quizDB.length) {
        loadQuestion();
    } else {
        //display the showScore
        showScore.innerHTML = `<h3>You Scored ${score}/${quizDB.length}</h3>
        <button class="btn"onClick ="location.reload()">Play Again</button>`;

        showScore.classList.remove("scoreA");
    }
});







