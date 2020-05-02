export interface IDistrictData {
  district?: string,
  active?: number,
  confirmed?: number,
  deaths?: number,
  recovered?: number,
  lastupdatedtime?: Date,
  delta?: {
    confirmed?: number,
    deceased?: number,
    recovered?: number
  }
}