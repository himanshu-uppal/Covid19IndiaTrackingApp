import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'
import {HttpClient} from '@angular/common/http'
import { IStateData } from '../models/state-data-model'

@Injectable()
export class CovidIndiaDataService{
    constructor(private http:HttpClient){

    }
    getStateWiseData():Observable<any>{
        //data returned is not type of IStateData , have to modify in resolver so taking any datatype
        return this.http.get<any>('https://api.covid19india.org/data.json')
    }

    getDistrictWiseData():Observable<any>{
       
        return this.http.get<any>('https://api.covid19india.org/v2/state_district_wise.json')
    }

} 