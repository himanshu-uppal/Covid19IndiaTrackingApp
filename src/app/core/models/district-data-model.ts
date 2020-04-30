export interface IDistrictData {
     state?: string,
     stateCode?: string,
     active?: number,
     confirmed?: number,
     deaths?: number,
     recovered?: number,
     lastupdatedtime?:Date,
     delta?:{
      confirmed?: number,
      deceased?: number,
      recovered?: number
     }
   }