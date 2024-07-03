import { Component, OnInit } from '@angular/core';
import { InterviewsService } from 'src/app/services/interviews.service';
@Component({
  selector: 'app-haunts',
  templateUrl: './haunts.component.html',
  styleUrls: ['./haunts.component.scss']
})
export class HauntsComponent implements OnInit {

  constructor(private service:InterviewsService) { }
  interviewData:any;
  ngOnInit(): void {
    this.interviewData = this.service.interviewDetails;
  }

  
}
