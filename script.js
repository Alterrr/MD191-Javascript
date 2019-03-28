var quiz = [
  [1, "Question 1", "1"],
  [2, "Question 2", "2"],
  [3, "Question 3", "3"]
];

var answer;
var response;
var cor = 0;

for(var i = 0; i < (quiz.length+1); i += 1){
//document.write(i);
if (i===quiz.length){
  document.write(`<h2>You got ${cor} out of ${i} questions right</h2>`);
}else {
  answer = prompt(quiz[i][1]);
  response = answer.toLowerCase();
    
  if (response === quiz[i][2]){
      cor +=1;
      document.write(`<h2>You got question ${quiz[i][0]} right</h2>`);
  }else {
      document.write(`<h2>You got question ${quiz[i][0]} wrong</h2>`);
  }
}
}







