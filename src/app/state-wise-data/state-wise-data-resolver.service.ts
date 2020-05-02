import {Injectable} from '@angular/core'
import {Resolve} from '@angular/router'
import { CovidIndiaDataService } from '../core';
import {map} from 'rxjs/operators'
import { forkJoin } from 'rxjs';

 @Injectable()
export class StateWiseDataResolver implements Resolve<any>{
    constructor(private covidIndiaDataService:CovidIndiaDataService){
     }
    resolve(){
        console.log('resolving state wise data')
        let join = forkJoin(this.covidIndiaDataService.getStateWiseData(),this.covidIndiaDataService.getDistrictWiseData()).pipe(map((allResponses) => {
         
            return {
              statewisedata: allResponses[0].statewise,
              districtwisedata: allResponses[1]
            };
          }))

          return join;
     }
 }  