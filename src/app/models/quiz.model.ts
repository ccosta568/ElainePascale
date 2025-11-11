export interface QuizOption {
  text: string;
  points?: number;        // for normal questions
  strongBook?: string;    // for special routing answers
}

export interface Question {
  id: string;
  questionText: string;
  options: QuizOption[];
}