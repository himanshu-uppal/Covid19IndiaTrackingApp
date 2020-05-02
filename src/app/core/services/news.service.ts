import { News } from "../models/news.model";
import { SampleNewsDataSource } from "./news-sample-source.model";
import { Injectable } from '@angular/core';

@Injectable()
export class NewsService {
    private dataSource: SampleNewsDataSource;
    private news: News[];
    private locator = (p: News, id: number) => p.id == id;
    constructor() {
        this.dataSource = new SampleNewsDataSource();
        this.news = new Array<News>();
        this.dataSource.getData().forEach(p => this.news.push(p));
    }
    getAllNews(): News[] {
        return this.news;
    }
    getNews(id: number): News {
        return this.news.find(p => this.locator(p, id));
    }
    saveNews(news: News) {
        if (news.id == 0 || news.id == null) {
            news.id = this.generateID();
            console.log(news);
            this.news.unshift(news);
            console.log('all news' + JSON.stringify(this.news));
        } else {
            let index = this.news
                .findIndex(p => this.locator(p, news.id));
            this.news.splice(index, 1, news);
        }
    }
    deleteNews(id: number) {
        let index = this.news.findIndex(p => this.locator(p, id));
        if (index > -1) {
            this.news.splice(index, 1);
        }
    }

    private generateID(): number {
        let candidate = 100;
        while (this.getNews(candidate) != null) {
            candidate++;
        }
        return candidate;
    }
}
   
