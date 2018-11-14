import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Movie } from './Movie';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  movieImdbID: string[] = ['tt0934706', 'tt0106057', 'tt1398941', 'tt1673430', 'tt0094074', 'tt0081573', 'tt0078346', 'tt0348150'];
  apikey: string = '556a1e71'
  private Movies: Movie[];
  count: number = 0;


  constructor(private http: HttpClient) { }


  loadMovies() {

    return Promise.all(this.movieImdbID.map(movieId => {
      return fetch(`https://www.omdbapi.com/?i=${movieId}&apikey=556a1e71`)
        .then(r => r.json())
        .then(res => {
          res.Id = ++this.count;
          return res;
        })
    }))
      .then((respone: Movie[]) => {
        this.Movies = respone
      })
  }

  getMovies() {
    return this.Movies;
  }

  addMovie(movie) {
    this.Movies.unshift(movie);
  }

  newId() {
    let newId = this.Movies.length;
    return newId++;
  }

  deleteMovie(e) {
    this.Movies.forEach((m, index) => {
      if (e.Id == m.Id) {
        this.Movies.splice(index, 1);
        return;
      }
    })
  }

  editMovie(e) {
    this.Movies.forEach((m, index) => {
      if (e.id == m.Id) {
        m.Year = e.year;
        m.Runtime = e.runtime;
        m.Title = e.title;
        m.Genre = e.genere;
        m.Director = e.director;
      }
    })
  }

}