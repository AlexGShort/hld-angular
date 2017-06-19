import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WorlddataService {
    worlddata;
    constructor(http:Http) {
    this.worlddata = http.get('../assets/world-50m.json')
        .map(response => response.json());
    }
}
