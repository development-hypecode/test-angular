import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../services/movies.service';
import { SelectedService } from '../services/selected.service'

@Component({
  selector: 'app-movie-selected',
  templateUrl: './movie-selected.component.html',
  styleUrls: ['../movie/movie.component.css']
})

export class MovieSelectedComponent implements OnInit {

	@Input() movie: Movie;

  constructor(private selection:SelectedService) { }

  ngOnInit() {
	  	
  }

  removeThisMovie(movie:Movie){
  	this.selection.remove(movie);
  }


}
