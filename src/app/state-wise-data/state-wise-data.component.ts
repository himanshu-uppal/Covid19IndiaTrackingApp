import { Component, OnInit } from '@angular/core';
import {IStateData} from '../core'
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-state-wise-data',
  templateUrl: './state-wise-data.component.html',
  styleUrls: ['./state-wise-data.component.css']
})
export class StateWiseDataComponent implements OnInit {

  stateWiseData :Array<IStateData>
  constructor(private route:ActivatedRoute){}

    ngOnInit():void{
        this.stateWiseData = this.route.snapshot.data['stateWiseData'];
    }

}
