import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Movie } from "./Movie";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title: string = 'herolo';
  movies: Movie[];
  imageWidth = 200;
  imageHeight = 300;
  showImage: boolean = false;
  constructor(private data: DataService) {
  }

  ngOnInit(): void {
    this.data.loadMovies()
      .then(() => this.movies = this.data.getMovies())
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
}
