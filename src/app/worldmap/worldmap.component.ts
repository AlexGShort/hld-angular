import { Component, OnInit } from '@angular/core';
import { WorlddataService } from '../worlddata.service';

@Component({
  selector: 'app-worldmap',
  templateUrl: './worldmap.component.html',
  styleUrls: ['./worldmap.component.css'],
  providers: [WorlddataService]
})
export class WorldmapComponent implements OnInit {
    worlddata;

  constructor(worlddataservice: WorlddataService) {
    //   console.log("WorldmapComponent constructor ran");
      worlddataservice.worlddata
        .subscribe(
            worlddata => this.worlddata = worlddata,
            console.error,
            // () => console.log('Completed!', this.worlddata)
        );
  }

  ngOnInit() {
  }

}
