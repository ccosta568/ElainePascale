import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/models/quiz.model';
import { BookDetailsService } from 'src/app/services/book-details.service';
import { QuizService } from 'src/app/services/quiz.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  bookData: any;
  questions: Question[] = [];
  currentQuestionIndex: number = 0;
  totalPoints: number = 0;
  quizCompleted: boolean = false;
  quizStarted: boolean = false;

  constructor(
    private service: BookDetailsService,
    private quizService: QuizService
  ) {}

  ngOnInit(): void {
    this.bookData = this.service.bookDetails;
    this.questions = this.quizService.getQuestions();
  }

  handleClick(book: any, event: MouseEvent) {
    // Check if the book name is "Convention Horror"
  if (book.bookName === "Con-thology") { 
    event?.preventDefault();
    alert(`Sorry, ${book.bookName} is available in person only.`);
    }
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
      bookTitle = "'If Nothing Else, Eve We've Enjoyed the Fruit'";
      bookDescription = 'Through a series of stories told by fruit, a woman learns that a gender war can be reversed by traveling back in time and eradicating the Tree of Knowledge and its villainous apples.';
    } else if (this.totalPoints <= 11) {
      bookTitle = 'The Blood Lights';
      bookDescription = 'The Blood Lights unleash a world-wide epidemic that causes women to feel an insatiable hunger for human flesh.';
    } else if (this.totalPoints <= 16) {
      bookTitle = 'The Kitchen Witches';
      bookDescription = 'Three different stories explain the mysterious deaths of the women of Cape Cod. The source of evil behind the devastation is worse than previously imagined.';
    } else {
      bookTitle = 'The Language of Crows';
      bookDescription = "'The Language of Crows and other stories contains dark fairy tales, historical horror, and psychological horror in voices of the violent and the violated. It is a collection of witches' spells, monsters' murmurs, and voices within one's head. Do you dare to listen to the language of crows?'";
    }
  
    return { title: bookTitle, description: bookDescription };
  }
}




