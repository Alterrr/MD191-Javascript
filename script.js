var quiz = [ // this array holds the question number, questions and answers. 
  [1, "Question 1", "1"], //make sure to have your answers all lowercase
  [2, "Question 2", "2"],
  [3, "Question 3", "3"]
];

var answer;
var response;
var cor = 0; //counts correct answers

for(var i = 0; i < (quiz.length+1); i += 1){

if (i===quiz.length){ //if the quiz is in its last loop, show the number of correct answers
  document.write(`<h2>You got ${cor} out of ${i} questions right</h2>`);
}else { //in all other cases, continue with the questions
  answer = prompt(quiz[i][1]);
  response = answer.toLowerCase(); //this converts all answers to lower case, so that "Answer" and "answer" count
    
  if (response === quiz[i][2]){
      cor +=1;
      document.write(`<h2>You got question ${quiz[i][0]} right</h2>`);
  }else {
      document.write(`<h2>You got question ${quiz[i][0]} wrong</h2>`);
  }
}
}







