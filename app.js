 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
 import{getDatabase,ref,set} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyBfRcpEZNuZ3NaVa1RB58Icle17ftx8zjk",
   authDomain: "quizz-9c6bc.firebaseapp.com",
   databaseURL: "https://quizz-9c6bc-default-rtdb.firebaseio.com",
   projectId: "quizz-9c6bc",
   storageBucket: "quizz-9c6bc.appspot.com",
   messagingSenderId: "164057725202",
   appId: "1:164057725202:web:66cca92c4926e0771a1bcb"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
const database = getDatabase();

var a = document.getElementById("quiz");
var b = document.getElementById("st");


a.className += " dis";
b.className += " ss";
var questions = [
  {
    ques:"What is the capital of France?",
    corect: "C) Paris",
    opt: [
      "A) Rome",
      "B) London",
      "C) Paris",
      "D) Berlin",
    ],
  },
  {
    ques: "Who is the current President of the United States?",
    corect: "A) Joe Biden",
    opt: [
      "A) Joe Biden",
      "B) Donald Trump",
      "C) Barack Obama",
      "D) George Washington",
    ],
  },
  {
    ques: "What is the currency of Japan?",
    corect: "A) Yen",
    opt: ["A) Yen", "B) Dollar", "C) Euro", "D) Pound"],
  },
  {
    ques: "Who is the author of the novel ?",
    corect: "D) Harper Lee",
    opt: [
      "A) William Shakespeare",
      "B) J.D. Salinger",
      "C) John Steinbeck",
      "D) Harper Lee",
    ],
  },
  {
    ques: "What is the highest mountain in the world?",
    corect: "A) Mount Everest",
    opt: [
      "A) Mount Everest",
      "B) K2",
      "C) Makalu",
      "D) Kangchenjunga",
    ],
  },
  {
    ques: "What is the capital of Australia?",
    corect: "C) Canberra",
    opt: ["A) Sydney", "B) Melbourne", "C) Canberra", "D) Perth"],
  },
  {
    ques: "Who is the current President of Pakistan?",
    corect: "A) Arif Alvi",
    opt: ["A) Arif Alvi", "B) Asif Ali Zardari", "C) Pervez Musharraf", "D) Muhammad Zia-ul-Haq"],
  },
  {
    ques: "What is the national animal of Pakistan?",
    corect: "D) Markhor",
    opt: [
      "A) Tiger",
      "B) Lion",
      "C) Elephant",
      "D) Markhor",
    ],
  },
  {
    ques: "What is the national sport of Pakistan?",
    corect: "C) Field Hockey",
    opt: ["A) Cricket", "B) Soccer", "C) Field Hockey", "D) Tennis"],
  },
  {
    ques: "Who was the first Prime Minister of Pakistan?",
    corect: "A) Liaquat Ali Khan",
    opt: ["A) Liaquat Ali Khan", "B) Muhammad Ali Jinnah", "C) Zulfikar Ali Bhutto", "D) Nawaz Sharif"],
  },
];

var quesNo = document.getElementById("questionNo");
var ansParent = document.getElementById("Answers");
var questionShow = document.getElementById("dummyquestion");
var score = document.getElementById("marks");
var percentage = document.getElementById("percentage");
var indexNum = 0;
var marks = 0;
function renderQuestion() {
  var currentQue = questions[indexNum];
  quesNo.innerHTML = "QUESTION:"+ (indexNum + 1) + "/" + questions.length;
  questionShow.innerHTML = currentQue.ques;
  ansParent.innerHTML = " ";

  for (var i = 0; i < currentQue.opt.length; i++) {
    var obj = {
      question: currentQue.ques,
      CorrectAns: currentQue.corect,
      OptionSelected: currentQue.opt[i],
    };
    ansParent.innerHTML += `<div class="col-md-6 py-2 ">
        <button onclick="checkQuestion('${currentQue.opt[i]}','${currentQue.corect}')">${currentQue.opt[i]}</button>
    </div>`;
  }
  obj.id = Math.random().toString().slice(2);
  let reference = ref(database, `Answers/Question${indexNum + 1}/${obj.id}/`);
  set(reference, obj);
  console.log(obj);
}

renderQuestion();
window.checkQuestion = function (a, b) {
  nextQuestion();

  if (a == b) {
    marks++;

    score.innerHTML = marks;
    percentage.innerHTML = (marks / 10) * 100 + "%";
  }
};

window.nextQuestion = function () {
  indexNum++;
  if (indexNum == questions.length) {
    var display1 = document.getElementById("main");
    display1.style.display += " none";
  }
  renderQuestion();
};


