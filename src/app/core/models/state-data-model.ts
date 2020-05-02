import { IDistrictData } from './district-data-model';

export interface IStateData {
     state?: string,
     statecode?: string,
     active?: number,
     confirmed?: number,
     deaths?: number,
     recovered?: number,
     lastupdatedtime?:Date,
     deltaconfirmed?:number,
     deltadeaths?:number,
     deltarecovered?:number,
     districtData?: IDistrictData
   }