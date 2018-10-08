import { Component, OnInit } from '@angular/core';
import { Movie, MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  title = 'entretien';

  moviesList: Movie[];

  moviesSelected: Movie[];

  constructor(private moviesService: MoviesService) {
  }

  ngOnInit() {
    this.moviesService.get(movieSelected.id).subscribe(data => {
      this.moviesSelected = data.content;
    });
  }
}
