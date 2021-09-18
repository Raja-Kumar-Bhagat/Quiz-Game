const quizDB = [
{
	question:"Q1: What is the full form of HTML?",
	a:"Hello To My Land",
	b:"Hey Text Markup Language",
	c:"Hyper Makeup Language",
	d:"Hypertext Markup Language",
	ans:"ans4"
},

{
	question:"Q2: What is the full form of CSS?",
	a:"Cascading Style Sheets",
	b:"Cascading Style Sheep",
	c:"Cartoon Style Sheets",
	d:"Cascading Super Sheets",
	ans:"ans1"
},

{
	question:"Q3: What is the full form of HTTP?",
	a:"Hypertext Transfer Product",
	b:"Hypertext Test Protocol",
	c:"Hey Transfer Protocol",
	d:"Hypertext Transfer Protocol",
	ans:"ans4"
},

{
	question:"Q4: What is the full form of JS?",
	a:"JavaScript",
	b:"JavaSuper",
	c:"JustScript",
	d:"JordebShoes",
	ans:"ans1"
},

{
	question:"Q5: Who was India's first man in space?",
	a:"Rakesh Sharma",
	b:"Ravish Malhotra",
	c:"Kalpana Chawla",
	d:"None Of the above",
	ans:"ans1"
},

{
	question:"Q6: Who was the first Indian to receive the Bharat Ratna Award?",
	a:"Dr. Radhakrishnan",
	b:"C.V Raman",
	c:"Mahatma Gandhi",
	d:"None Of the above",
	ans:"ans4"
},

{
	question:"Q7: Who was the first Woman Speaker of Lok Sabha?",
	a:"Meira Kumar",
	b:"Sushma Swaraj",
	c:"Sheila Dixit ",
	d:"None Of the above",
	ans:"ans1"
},

{
	question:"Q8: Who was appointed as the first woman President of India?",
	a:"Sushma Swaraj",
	b:"Meira Kumar",
	c:"Pratibha Patil",
	d:"Mamta Banerjee",
	ans:"ans3"
},

{
	question:"Q9: Who was the first woman to be the Prime Minister of India?",
	a:"Sheila Dixit",
	b:"Indira Gandhi",
	c:"Pratibha Patil",
	d:"None Of the above",
	ans:"ans2"
},

{
	question:"Q10: Who was the first woman Governor in India?",
	a:"Sarojini Naidu",
	b:"Sucheta Kripalani",
	c:"Rajkumari Amrita Kaur",
	d:"Pratibha Patil",
	ans:"ans1"
},

];

const question = document.querySelector('.question');
const option1= document.querySelector('#option1');
const option2= document.querySelector('#option2');
const option3= document.querySelector('#option3');
const option4= document.querySelector('#option4');
const submit= document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {

	const questionList = quizDB[questionCount];

	question.innerText = questionList.question;
	option1.innerText = questionList.a;
	option2.innerText = questionList.b;
	option3.innerText = questionList.c;
	option4.innerText = questionList.d;
	
}

loadQuestion();

const getCheckAnswer = () => {
	let answer;

	answers.forEach((curAnsElem) => {
		if(curAnsElem.checked) {
			answer = curAnsElem.id;
		}
	});

	return answer;
};

/*const deselectAll = () => {
	answers.forEach((curAnsElem) => curAnslem.checked = false);
}*/

submit.addEventListener('click', () => {
	const checkedAnswer = getCheckAnswer();
	

	if(checkedAnswer == quizDB[questionCount].ans) {
		score++;
	}

	questionCount++;

	/*deselectAll();*/

	if(questionCount < quizDB.length) {
		loadQuestion();
	}

	else {
		showScore.innerHTML = `
		<h3> You scored ${score}/${quizDB.length} </h3>
		<button class="btn" onclick="location.reload()">Play Again</button>

	`;
	showScore.classList.remove('scoreArea');
}


});