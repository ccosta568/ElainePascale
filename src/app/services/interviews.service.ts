import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InterviewsService {

  constructor() { }
  interviewDetails = [
    {id:1,
      intName:"The Write Start",
      intDes:"ha ha ha this a a description ha ha ha hlook at me lol"
    },
  ]
}
