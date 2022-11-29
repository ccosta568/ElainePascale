import { Component, OnInit } from '@angular/core';
import { InterviewsService } from 'src/app/services/interviews.service';
@Component({
  selector: 'app-wihm',
  templateUrl: './wihm.component.html',
  styleUrls: ['./wihm.component.scss']
})
export class WihmComponent implements OnInit {

  constructor(private service:InterviewsService) { }
  interviewData:any;
  ngOnInit(): void {
    this.interviewData = this.service.interviewDetails;
  }

}
