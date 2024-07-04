import { Injectable } from '@angular/core';
import { Question } from '../models/quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private quizQuestions: Question[] = [
    {
      questionText: 'Who is your sidekick?',
      options: [
        { text: 'Cat', points: 1 },
        { text: 'Bat', points: 2 },
        { text: 'Porcupine', points: 3 },
        { text: 'Crow', points: 4 }
      ]
    },
    {
      questionText: 'Do you like the taste of blood?',
      options: [
        { text: '"Yes!"', points: 1 },
        { text: '"Ew, No"', points: 2 },
        { text: '"Depends, what’s with it?"', points: 3 },
        { text: '“Don’t judge”', points: 4 }
      ]
    },
    {
      questionText: 'Who Do you Marry?',
      options: [
        { text: 'The Hairy Werewolf', points: 1 },
        { text: 'The Marsh Person', points: 2 },
        { text: 'The Sensitive Mothman', points: 3 },
        { text: 'The Sexy Vampire', points: 4 }
      ]
    },
    {
      questionText: 'Family Role?',
      options: [
        { text: 'Boss Breadwinner', points: 1 },
        { text: 'Witchy Aunt/Wizard Uncle', points: 2 },
        { text: 'Black Sheep', points: 3 },
        { text: 'Creepy Cousin', points: 4 }
      ]
    },
    {
      questionText: 'Which path?',
      options: [
        { text: 'Through the Marsh', points: 1 },
        { text: 'Into the Forest', points: 2 },
        { text: 'Behind the Alley', points: 3 },
        { text: 'Over the Dunes', points: 4 }
      ]
    },
    // Add more questions here
  ];

  getQuestions(): Question[] {
    return this.quizQuestions;
  }
}
