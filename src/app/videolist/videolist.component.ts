import { Component, OnInit } from '@angular/core';
import { VideodataService } from '../videodata.service';

@Component({
  selector: 'app-videolist',
  templateUrl: './videolist.component.html',
  styleUrls: ['./videolist.component.css'],
  providers: [VideodataService],
})
export class VideolistComponent implements OnInit {
  videodata;
  videodataService: VideodataService;
  randomText: string;

  constructor(videodataService: VideodataService) {
      this.videodataService = videodataService;
  }

  ngOnInit() {
      this.videodata = this.videodataService.videolist;
      this.randomText = "This is some random text.";
  }

}
