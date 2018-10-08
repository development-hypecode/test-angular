import { Component, OnInit } from '@angular/core';
import { Movie, MoviesService } from './shared/services/movies.service';
import {MovieComponent} from './shared/movie/movie.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'entretien';

  moviesList: Movie[];

  moviesSelected: Movie[];

  constructor(private moviesService: MoviesService) {
  }

  ngOnInit() {
    this.moviesService.getList({page: 1, limit: 20}).subscribe(data => {
      this.moviesList = data.content;
    });
  }

}
