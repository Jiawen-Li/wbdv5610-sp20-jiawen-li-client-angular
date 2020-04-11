import {Injectable} from '@angular/core';

@Injectable()

export class QuestionServiceClient {
  findQuestionsForQuiz = (qid) =>
    fetch(`https://sleepy-bayou-71044.herokuapp.com/api/quizzes/${qid}/questions`)
      .then(response => response.json())
}
