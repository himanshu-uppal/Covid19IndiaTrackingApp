import { Component, OnInit } from '@angular/core';
import { NewsService } from "../core/services/news.service";
import { News } from "../core/models/news.model";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
 
  allNews : News[] = [];

  constructor(private newsService:NewsService) {    
   }

  ngOnInit(): void {

    this.allNews = this.newsService.getAllNews();
  
  }  
  
}
