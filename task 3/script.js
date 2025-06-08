// ===== Joke API =====
function getJoke() {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(res => res.json())
    .then(data => {
      document.getElementById("joke").innerText = data.setup + " - " + data.punchline;
    })
    .catch(() => {
      document.getElementById("joke").innerText = "Failed to fetch joke.";
    });
}

// ===== Quiz =====
let currentQuestion = 0;
let score = 0;

const questions = [
  {
    q: "What is 2 + 2?",
    a: ["3", "4", "5"],
    correct: 1
  },
  {
    q: "Capital of India?",
    a: ["Mumbai", "New Delhi", "Kolkata"],
    correct: 1
  },
  {
    q: "Which is a programming language?",
    a: ["HTML", "CSS", "JavaScript"],
    correct: 2
  }
];

function loadQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").innerText = q.q;
  q.a.forEach((choice, i) => {
    document.getElementById(`btn${i}`).innerText = choice;
  });
}

function checkAnswer(index) {
  if (index === questions[currentQuestion].correct) score++;
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    document.getElementById("question").innerText = `Quiz Finished! Your Score: ${score}/${questions.length}`;
    document.getElementById("options").innerHTML = "";
  }
}

loadQuestion();

// ===== Image Carousel =====
const images = [
  "https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.jpg?s=1024x1024&w=is&k=20&c=9Qfj9S124ojed7s4OWu3a3vbbMC76QYkqczg4L4M-Sc=",
  "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=800",
  "https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.jpg?s=1024x1024&w=is&k=20&c=9Qfj9S124ojed7s4OWu3a3vbbMC76QYkqczg4L4M-Sc="
];
let index = 0;

function showImage(i) {
  document.getElementById("carousel").src = images[i];
}

function next() {
  index = (index + 1) % images.length;
  showImage(index);
}

function prev() {
  index = (index - 1 + images.length) % images.length;
  showImage(index);
}

// Show first image on load
showImage(index);
