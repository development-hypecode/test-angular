import { Injectable } from '@angular/core';
import { Movie } from './movies.service'
@Injectable({
  providedIn: 'root'
})
export class SelectedService {

	movies: Movie[] = [];
	public alreadyOneSelected = false; 
  constructor() { }

  add(movie:Movie){
    if(this.movies.indexOf(movie) == -1) {
      this.movies.push(movie);
    }
  	this.alreadyOneSelected = true; 
  }

  remove(movie:Movie){
  	this.movies = this.movies.filter( (movieFromArray) => { return movieFromArray.attributes.description !=  movie.attributes.description } );
  	if(this.movies.length == 0) this.alreadyOneSelected = false; 
	}

	getMovies(){
		return this.movies;
	}
}
