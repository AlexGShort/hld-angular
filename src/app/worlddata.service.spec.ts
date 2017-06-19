import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
// import { Http } from '@angular/http';
// import 'rxjs/add/operator/map';

import { WorlddataService } from './worlddata.service';

describe('WorlddataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [WorlddataService]
    });
  });

  it('should be created', inject([WorlddataService], (service: WorlddataService) => {
    expect(service).toBeTruthy();
    console.log("service:", service)
  }));

  it('should return something', inject([WorlddataService], (service: WorlddataService) => {
    expect(
        service.worlddata.subscribe(
        worlddata => console.log("worlddata:", worlddata)
    )).toBeTruthy();
    // expect(this.myworlddata).toBeTruthy();

  }));
});
