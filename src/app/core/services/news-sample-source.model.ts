import { News } from "../models/news.model";
export class SampleNewsDataSource {
    private data: News[];
    constructor() {
        this.data = new Array<News>(
            {
                id: 1,
                title: "News 1",
                description: "News 1",
                summary: "News 1",
                fullNews: "News 1",
                image: "News 1",
                lastUpdatedTime: new Date()
            },
            {
                id: 2, title: "News 2",
                description: "News 2",
                summary: "News 2",
                fullNews: "News 2",
                image: "News 2",
                lastUpdatedTime: new Date()
            },
            {
                id: 3, title: "News 3",
                description: "News 3",
                summary: "News 3",
                fullNews: "News 3",
                image: "News 3",
                lastUpdatedTime: new Date()
            },
            {
                id: 4, title: "News 4",
                description: "News 4",
                summary: "News 4",
                fullNews: "News 4",
                image: "News 4",
                lastUpdatedTime: new Date()
            }
        );
    }

    getData(): News[] {
        return this.data;
    }
}