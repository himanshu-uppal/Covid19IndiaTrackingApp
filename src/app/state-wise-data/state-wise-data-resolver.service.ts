import {Injectable} from '@angular/core'
import {Resolve} from '@angular/router'
import { CovidIndiaDataService } from '../core';
import {map} from 'rxjs/operators'

 @Injectable()
export class StateWiseDataResolver implements Resolve<any>{
    constructor(private covidIndiaDataService:CovidIndiaDataService){
     }
    resolve(){
        console.log('resolving state wise data')
        return this.covidIndiaDataService.getStateWiseData().pipe(map(statewisedata =>statewisedata.statewise))
     }
 }  