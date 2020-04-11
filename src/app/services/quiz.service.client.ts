import {Injectable} from '@angular/core';

@Injectable()
export class QuizServiceClient {
  findAllQuizzes = () =>
    fetch('https://sleepy-bayou-71044.herokuapp.com/api/quizzes')
      .then(response => response.json())
  findQuizById = (qid) =>
    fetch(`https://sleepy-bayou-71044.herokuapp.com/api/quizzes/${qid}`)
      .then(response => response.json())
}
