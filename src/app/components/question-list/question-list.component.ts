import { Component, OnInit } from '@angular/core';
import {DataService } from '../../services/data.service';
import { Question } from '../../Modals/Question';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  questions:Object[];

  constructor(public dataSevice:DataService) { 
    
  }

  ngOnInit() {
    this.questions = this.dataSevice.getQuestions();
  }
  addQuestion(question:Question){
    console.log(question);
    this.dataSevice.addQuestion(question);
  }
}
