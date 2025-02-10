const questions = [
    {
        question: "What is the capital of Australia?",
        answer: "Canberra",
    },
    {
        question: "What is the largest mammal",
        answer: "Blue Whale",
    },

];

let index = 0;
let score = 0;

function displayQuestion() {
    const question = document.getElementById("Question");
    question.textContent = questions[index].question;
}

function resetQuestion() {
    index = 0;
    score = 0;

    document.getElementById("Question").style.display = "block";
    document.getElementById('submit').style.display = 'block';
    document.getElementById('reset').style.display = 'none';
    document.getElementById("result").style.display = 'none';

    displayQuestion();
}

function onSubmit() {
    const inputAnswer = document.getElementById("input_answer").value;

    if (!inputAnswer) {
        return alert('Please insert your answer!');
    }

    if ( inputAnswer.trim().toLowerCase() === questions[index].answer.toLowerCase()) {
        score++;
    }

    index++;

    document.getElementById("input_answer").value = '';
    if (index < questions.length) {
        displayQuestion();
    } else {
        document.getElementById("result").textContent = `Your score is ${score}/${questions.length}`;
        document.getElementById("result").style.display = 'block';

        document.getElementById("Question").style.display = "none";
        document.getElementById('submit').style.display = 'none';
        document.getElementById('reset').style.display = 'block';
    }
}