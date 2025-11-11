// src/app/services/quiz.service.ts
import { Injectable } from '@angular/core';
import { Question } from '../models/quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private quizQuestions: Question[] = [
    {
      id: 'q1',
      questionText: 'Who is your sidekick?',
      options: [
        { text: 'Cat', points: 1 },
        { text: 'Bat', points: 2 },
        { text: 'Porcupine', points: 3 },
        { text: 'Crow', points: 4 }
      ]
    },
    {
      id: 'q2',
      questionText: 'Do you like the taste of blood?',
      options: [
        { text: '"Yes!"', points: 1 },
        { text: '"Ew, No"', points: 2 },
        { text: '"Depends, what’s with it?"', points: 3 },
        { text: '“Don’t judge”', points: 4 }
      ]
    },
    {
      id: 'q3',
      questionText: 'Who do you marry?',
      options: [
        { text: 'The Hairy Werewolf', points: 1 },
        { text: 'The Marsh Person', points: 2 },
        { text: 'The Sensitive Mothman', points: 3 },
        { text: 'The Sexy Vampire', points: 4 }
      ]
    },
    {
      id: 'q4',
      questionText: 'Family role?',
      options: [
        { text: 'Boss Breadwinner', points: 1 },
        { text: 'Witchy Aunt/Wizard Uncle', points: 2 },
        { text: 'Black Sheep', points: 3 },
        { text: 'Creepy Cousin', points: 4 }
      ]
    },
    {
      id: 'q5',
      questionText: 'Which path?',
      options: [
        { text: 'Through the Marsh', points: 1 },
        { text: 'Into the Forest', points: 2 },
        { text: 'Behind the Alley', points: 3 },
        { text: 'Over the Dunes', points: 4 }
      ]
    },

    // ===== SPECIAL ROUTING QUESTIONS =====

    {
      id: 'q6',
      questionText: 'What is your preferred method of travel?',
      options: [
        { text: "Witch's broom", strongBook: 'languageCrows' },   // The Language of Crows
        { text: 'Golf cart', strongBook: 'solstice' },            // The Solstice
        { text: 'Commuter bus', strongBook: 'bloodLights' },      // The Blood Lights
        { text: 'Giant eagle', strongBook: 'darknessMostFowl' }   // Darkness Most Fowl
      ]
    },
    {
      id: 'q7',
      questionText: 'What is your favorite appetizer?',
      options: [
        { text: 'Charcuterie board', strongBook: 'solstice' },        // The Solstice
        { text: 'Fruit', strongBook: 'ifFruit' },                     // If Nothing Else, Eve...
        { text: 'Chicken wings', strongBook: 'darknessMostFowl' },    // Darkness Most Fowl
        { text: 'Cocktails', strongBook: 'kitchenWitches' }           // The Kitchen Witches
      ]
    },
    {
      id: 'q8',
      questionText: 'How do you stay young?',
      options: [
        { text: 'Botox', strongBook: 'kitchenWitches' },              // The Kitchen Witches
        { text: 'Pills', strongBook: 'solstice' },                    // The Solstice
        { text: "I’m the Goat Man, I don’t age", strongBook: 'ifFruit' } // If Nothing Else, Eve...
      ]
    }
  ];

  getQuestions(): Question[] {
    return this.quizQuestions;
  }
}
