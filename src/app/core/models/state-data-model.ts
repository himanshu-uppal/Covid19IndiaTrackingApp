export interface IStateData {
     state?: string,
     stateCode?: string,
     active?: number,
     confirmed?: number,
     deaths?: number,
     recovered?: number,
     lastupdatedtime?:Date,
     deltaconfirmed?:number,
     deltadeaths?:number,
     deltarecovered?:number
   }