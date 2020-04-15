import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-true-false',
  templateUrl: './true-false.component.html',
  styleUrls: ['./true-false.component.css']
})
export class TrueFalseComponent implements OnInit {

  constructor() {
  }

  @Input()
  question = {_id: '', title: '', question: '', correct: '', choices: [], type: ''};
  @Input()
  answer = '';
  @Input()
  grading = false;

  @Output()
  answerChange = new EventEmitter<string>();

  submitAnswer = () => {
    this.answerChange.emit(this.answer);
  }

  ngOnInit(): void {
  }

}
