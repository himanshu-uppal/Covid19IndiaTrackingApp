import { Component, OnInit } from '@angular/core';
import { NewsService } from "../core/services/news.service";
import { News } from "../core/models/news.model";
import { NewsFormGroup } from './news-form.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {

 
  news: News = new News();
  form: NewsFormGroup = new NewsFormGroup();

  constructor(private router:Router,private newsService:NewsService) { }

  ngOnInit(): void {
  }

  get jsonNews() {
    return JSON.stringify(this.news);
  }
  addNews(p: News) {
    console.log("New News: " + this.jsonNews);
  }

  formSubmitted: boolean = false;

  submitForm(form: NewsFormGroup) {
    this.formSubmitted = true;
    if (form.valid) {
      this.addNews(this.news);
      this.newsService.saveNews(this.news);
      this.news = new News();
      form.reset();
      this.formSubmitted = false;
      this.router.navigateByUrl("/news");
    }
  }

}
