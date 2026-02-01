// src/app/components/home/home.component.ts
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Question, QuizOption } from 'src/app/models/quiz.model';
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
  currentQuestionIndex = 0;
  totalPoints = 0;
  quizCompleted = false;
  quizStarted = false;

  // collect "strong" picks
  private strongHits: string[] = [];

  constructor(
    private service: BookDetailsService,
    private quizService: QuizService,
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit(): void {
    this.bookData = this.service.bookDetails;
    this.questions = this.quizService.getQuestions();
    this.title.setTitle('Elaine Pascale | Horror Writer in Florida | Godmother of Horror');
    this.meta.updateTag({
      name: 'description',
      content:
        'Elaine Pascale is an accomplished horror writer in Florida, the Godmother of Horror, author of novels and short stories, featured on podcasts and videos, and a frequent guest at Florida comic cons and reading panels. Traditionally published and active in Women in Horror Month.'
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'Elaine Pascale, horror writer Florida, horror author, women in horror month, horror books, short stories, podcasts, videos, comic cons, reading panels'
    });
  }

  handleClick(book: any, event: MouseEvent) {
    if (book.bookName === 'Con-thology') {
      event?.preventDefault();
      alert(`Sorry, ${book.bookName} is available in person only.`);
    }
  }

  // called from template: (click)="selectOption(option)"
  selectOption(option: QuizOption): void {
    // normal scoring for first 5
    if (typeof option.points === 'number') {
      this.totalPoints += option.points;
    }

    // strong routing for special questions
    if (option.strongBook) {
      this.strongHits.push(option.strongBook);
    }

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
    this.strongHits = [];
  }

  startQuiz(): void {
    this.quizStarted = true;
  }

  recommendBook(): { title: string; description: string } {
    // 1) If any strong-routing answers were chosen, use them.
    if (this.strongHits.length) {
      const freq: { [key: string]: number } = {};
      this.strongHits.forEach(key => {
        freq[key] = (freq[key] || 0) + 1;
      });

      const winnerKey = Object.entries(freq)
        .sort((a, b) => b[1] - a[1])[0][0];

      return this.mapBookKeyToDetails(winnerKey);
    }

    // 2) Fallback to your original points system.
    if (this.totalPoints <= 6) {
      return this.mapBookKeyToDetails('ifFruit');
    } else if (this.totalPoints <= 11) {
      return this.mapBookKeyToDetails('bloodLights');
    } else if (this.totalPoints <= 16) {
      return this.mapBookKeyToDetails('kitchenWitches');
    } else {
      return this.mapBookKeyToDetails('languageCrows');
    }
  }

  private mapBookKeyToDetails(key: string): { title: string; description: string } {
    switch (key) {
      case 'ifFruit':
        return {
          title: "If Nothing Else, Eve We've Enjoyed the Fruit",
          description:
            'When a woman stops taking her ridatemp pills, the fruit start talking—urging her toward murder and rebellion. Through tales of monsters, pageants, and the Goat Man, she learns that the battle of the sexes began long before Eden’s first bite.'
        };
      case 'bloodLights':
        return {
          title: 'The Blood Lights',
          description:
            'They’re the last thing you’ll ever see. When eerie red lights trigger violent outbreaks and awaken old secrets, obsession and ambition spread faster than the contagion itself. Some chase the truth—others just try to survive.'
        };
      case 'kitchenWitches':
        return {
          title: 'The Kitchen Witches',
          description:
            'On Cape Cod, the women are dying to tell their stories—literally. Three chilling tales reveal the sinister magic beneath small-town perfection, where chores, gossip, and witchcraft blend into something deadly.'
        };
      case 'languageCrows':
        return {
          title: 'The Language of Crows',
          description:
            "When hope is lost, the crows begin to speak. Their voices whisper dark fairy tales, historical horrors, and the secrets of witches and monsters alike. Do you dare to listen to the language of crows?"
        };
      case 'solstice':
        return {
          title: 'The Solstice',
          description:
            'On an island cut off by a storm, those who wear red bands and take Solidox pills stay young—but crave human flesh. As the rules of “The Solstice” turn survival into a deadly game, no one is safe from the hunters or the madness spreading through the ruins.'
        };
      case 'darknessMostFowl':
        return {
          title: 'Darkness Most Fowl',
          description:
            'From a plague of grackles to a watch of shrikes, this anthology of bird horror takes flight with twenty tales that prove even the most beautiful creatures can haunt your darkest nightmares.'
        };
      default:
        // safe fallback
        return this.mapBookKeyToDetails('languageCrows');
    }
  }
}
