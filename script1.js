document.getElementById("Start").onclick = function() {runQuiz()};

function test(){
document.write("test");
}
function runQuiz() {
  var quiz = [
    [1, "Question 1", "1"], //answers must be all lowercase
    [2, "Question 2", "2"],
    [3, "Question 3", "3"]
  ];

  var answer;
  var response;
  var cor = 0;


  for (var i = 0; i < (quiz.length + 1); i += 1) {
    //document.write(i);
    if (i === quiz.length) {
      document.write(`<h2>You got ${cor} out of ${i} questions right</h2>`);
    } else {
      answer = prompt(quiz[i][1]);
      response = answer.toLowerCase();

      if (response === quiz[i][2]) {
        cor += 1;
    //document.getElementById("output").innerHTML = `<h2>You got question ${quiz[i][0]} right</h2>`;
        document.write(`<h2>You got question ${quiz[i][0]} right</h2>`);
      } else {
        document.write(`<h2>You got question ${quiz[i][0]} wrong</h2>`);
      }
    }
  }
}
