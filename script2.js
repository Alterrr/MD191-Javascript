document.getElementById("Start").onclick = function() {runQuiz()};

function runQuiz() {
  var quiz = [
    [1, "Question 1", "1"],
    [2, "Question 2", "2"],
    [3, "Question 3", "3"]
  ];

  var answer;
  var response;
  var cor = 0;


  for (var i = 0; i < (quiz.length + 1); i += 1) {
    //document.write(i);
    if (i === quiz.length) {
      //document.write(`<h2>You got ${cor} out of ${i} questions right</h2>`);
      document.getElementById("output").innerHTML = (`<h2>You got ${cor} out of ${i} questions right</h2>`)
    } else {
      answer = prompt(quiz[i][1]);
      response = answer.toLowerCase();

      if (response === quiz[i][2]) {
        cor += 1;
        //document.write(`<h2>You got question ${quiz[i][0]} right</h2>`);
        document.getElementById("output").innerHTML = `<h2>You got question ${quiz[i][0]} right</h2>`;
      } else {
        //document.write(`<h2>You got question ${quiz[i][0]} wrong</h2>`);
        document.getElementById("output").innerHTML = `<h2>You got question ${quiz[i][0]} wrong</h2>`
      }
    }
  }
  if (cor <= (quiz.length*0.3)){
  	document.getElementById("output").innerHTML += (`<h2>Better luck next time</h2>`)
  } //prints feedback, adjust the ranges to make harder/easier
  if (cor < (quiz.length*0.8) && cor > (quiz.length*0.3)){
  document.getElementById("output").innerHTML += (`<h2>Halfway there</h2>`)} //prins feedback
  if (cor > (quiz.length*0.8)){
  	document.getElementById("output").innerHTML += (`<h2>Well done!</h2>`)
  } //prints feedback
}
