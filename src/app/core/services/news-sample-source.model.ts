import { News } from "../models/news.model";
export class SampleNewsDataSource {
    private data: News[];
    constructor() {
        this.data = new Array<News>(
            {
                id: 1,
                title: "Railways has run 34 Shramik special trains so far from different parts of the country and is fulfilling its social responsibility of providing safe and convenient travel especially to the poorest of the poor in a time of crisis",
                description: "",
                summary: "",
                fullNews: "The BJP said on Monday the railways has subsidised 85 per cent of ticket fare for special trains being run to transport migrant workers and the state government has to pay the remaining 15 per cent, soon after the Congress attacked the central government over the issue.               The state government concerned can also pay for the tickets, BJP spokesperson Sambit Patra said.",
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