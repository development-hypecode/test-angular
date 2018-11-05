import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesService } from './services/movies.service';
import { HttpClientModule } from '@angular/common/http';
import { MovieComponent } from './movie/movie.component';
import { MovieSelectedComponent } from './movie-selected/movie-selected.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [MovieComponent, MovieSelectedComponent],
  exports:[
  	MovieComponent,
  	MovieSelectedComponent,
  ],
  providers: [
    MoviesService
  ]
})
export class SharedModule { }
