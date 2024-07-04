import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/models/quiz.model';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  questions: Question[] = [];
  currentQuestionIndex: number = 0;
  totalPoints: number = 0;
  quizCompleted: boolean = false;
  quizStarted: boolean = false;

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.questions = this.quizService.getQuestions();
  }

  selectOption(points: number): void {
    this.totalPoints += points;
    this.nextQuestion();
  }

  nextQuestion(): void {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    } else {
      this.quizCompleted = true;
    }
  }

  restartQuiz(): void {
    this.currentQuestionIndex = 0;
    this.totalPoints = 0;
    this.quizCompleted = false;
  }

  startQuiz(): void {
    this.quizStarted = true;
  }

  recommendBook(): { title: string, description: string } {
    let bookTitle: string;
    let bookDescription: string;
  
    if (this.totalPoints <= 6) {
      bookTitle = 'Eve';
      bookDescription = 'Through a series of stories told by fruit, a woman learns that a gender war can be reversed by traveling back in time and eradicating the Tree of Knowledge and its villainous apples.';
    } else if (this.totalPoints <= 11) {
      bookTitle = 'The Blood Lights';
      bookDescription = 'The Blood Lights unleash a world-wide epidemic that causes women to feel an insatiable hunger for human flesh.';
    } else if (this.totalPoints <= 16) {
      bookTitle = 'Kitchen Witches';
      bookDescription = 'Dive into the world of...';
    } else {
      bookTitle = 'Crows';
      bookDescription = 'A thrilling tale of...';
    }
  
    return { title: bookTitle, description: bookDescription };
  }
  
}
