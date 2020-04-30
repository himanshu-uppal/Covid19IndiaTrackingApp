import { Component, OnInit } from '@angular/core';
import { Model } from "../core/services/repository-news.model";
import { News } from "../core/models/news.model";
import { NewsFormGroup } from './news-form.model';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {

  model: Model = new Model();
  news: News = new News();
  form: NewsFormGroup = new NewsFormGroup();

  constructor() { }

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
      this.news = new News();
      form.reset();
      this.formSubmitted = false;
    }
  }

}
