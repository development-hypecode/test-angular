import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesService } from './services/movies.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
    MoviesService
  ]
})
export class SharedModule { }
