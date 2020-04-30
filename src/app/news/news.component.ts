import { Component, OnInit } from '@angular/core';
import { Model } from "../core/services/repository-news.model";
import { News } from "../core/models/news.model";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  model: Model = new Model();
  allNews : News[] = [];

  constructor() {
    
   }

  ngOnInit(): void {

    this.allNews = this.model.getAllNews();
  
  }

  
  
}
