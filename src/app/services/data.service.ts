import { Injectable } from '@angular/core';
import { Question } from '../Modals/Question';

@Injectable()
export class DataService {
 questions:Question[];
  
  constructor() {
    this.questions = [
      /*
      {
        text: 'What is your name?',
        answer: 'My name is Kishan',
        hide:true
      },
      {
        text: 'What is your favorite color?',
        answer: 'My favorite color is RED',
        hide : true
      },
      {
        text: 'What is your favorite language?',
        answer: 'My favorite language is JAVASCRIPT',
        hide : true
      },
      */
    ];
   }

   // Get Questions
   getQuestions(){
     if(localStorage.getItem('questions')=== null){
       this.questions = [];
     } else {
       this.questions = JSON.parse(localStorage.getItem('questions')) ; 
     }
     return this.questions;
   } 
   
   // Add questions 
   addQuestion(question:Question){
     this.questions.unshift(question);
     
     //Innit local var
     let questions;
     
     if(localStorage.getItem('questions')=== null){
      questions = [];
      
      //Push new question
      questions.unshift(question);

      //Set new array to LS
      localStorage.setItem('questions' , JSON.stringify(questions));
    } else {
      questions = JSON.parse(localStorage.getItem('questions')) ; 

      localStorage.setItem('questions' , JSON.stringify(questions));
    }
   }
   
   // Remove questions
   removeQuestion(question){
     for(let i=0; i< this.questions.length ; i++){
       if(question == this.questions[i]){
         this.questions.splice(i,1);
         localStorage.setItem('questions' , JSON.stringify(this.questions));
       }
     }
   }
}
