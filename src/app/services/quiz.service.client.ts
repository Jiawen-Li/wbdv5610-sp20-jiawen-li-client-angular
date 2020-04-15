import {Injectable} from '@angular/core';

@Injectable()
export class QuizServiceClient {
  findAllQuizzes = () =>
    fetch('https://sleepy-bayou-71044.herokuapp.com/api/quizzes')
      .then(response => response.json());
  findQuizById = (qid) =>
    fetch(`https://sleepy-bayou-71044.herokuapp.com/api/quizzes/${qid}`)
      .then(response => response.json());

  submitQuiz = (quizId, questions) => fetch(`https://sleepy-bayou-71044.herokuapp.com/api/quizzes/${quizId}/attempts`, {
    method: 'POST',
    body: JSON.stringify(questions),
    headers: {
      'content-type': 'application/json'
    }
  }).then(response => response.json());
}

