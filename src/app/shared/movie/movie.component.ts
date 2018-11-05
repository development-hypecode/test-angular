import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../services/movies.service';
import { SelectedService } from '../services/selected.service'

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})

export class MovieComponent implements OnInit {

	@Input() movie: Movie;

  constructor(private selection:SelectedService) { }

  ngOnInit() {
  	
  }

  selectThis(movie:Movie){
  	this.selection.add(movie);
  }

}
