import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {IStateData} from '../core'
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-state-wise-data',
  templateUrl: './state-wise-data.component.html',
  styleUrls: ['./state-wise-data.component.css']
})
export class StateWiseDataComponent implements OnInit {

  stateWiseData :Array<IStateData>;
  districtWiseData : Array<any>;
  districtDataVisible:Map<string,boolean> = new Map<string,boolean>();

  constructor(private route:ActivatedRoute){}

    ngOnInit():void{
      console.log(this.route.snapshot.data['covid19IndiaData']);
      let covid19IndiaData = this.route.snapshot.data['covid19IndiaData'];
        this.stateWiseData = covid19IndiaData.statewisedata;
        this.districtWiseData = covid19IndiaData.districtwisedata;

        for(let state of this.stateWiseData){

          let currentStateDistrictDetails = this.districtWiseData.find(districtDetails =>{ return districtDetails.statecode === state.statecode}) ;
          console.log(state);
          console.log(currentStateDistrictDetails);
          if(currentStateDistrictDetails){
            state.districtData = currentStateDistrictDetails.districtData;
            this.districtDataVisible.set(state.statecode,false);

          }
          
        }
    }

    toggleDistrictDetails(statecode:string) {
      let visible = this.districtDataVisible.get(statecode);
      visible = !visible;
      this.districtDataVisible.set(statecode,visible);
    }

}
