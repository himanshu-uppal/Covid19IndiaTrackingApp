export class News {
    constructor(
    public id: number = 0,
    public title: string = "",
    public description: string= "",
    public summary: string= "",
    public fullNews: string= "",
    public image: string= "",
    public lastUpdatedTime: Date= new Date()){}
}