import { Component, OnInit } from '@angular/core';
import { Movie, MoviesService } from './shared/services/movies.service';
import { SelectedService } from './shared/services/selected.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'entretien';

  moviesList: Movie[];

  moviesSelected: Movie[];

  page: number = 1;

  constructor(private moviesService: MoviesService,
    public selection: SelectedService) {
    console.log(selection)
  }

  ngOnInit() {
    this.moviesService.getList({page: this.page, limit: 20}).subscribe(data => {
      this.moviesList = data.content;
    });
  }

  clickButtonNextPrevious(fowardOrBackward){
    fowardOrBackward ? this.page++ : this.page--;
    this.moviesService.getList({page: this.page, limit: 20}).subscribe(data => {
      this.moviesList = data.content;
    });
  }

}
