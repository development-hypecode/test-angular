import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Movie {
  attributes: {
    actors: string; // acteurs
    description: string; // synopsis
    director: string; // réalisateur
    duration: string; // durée en minute
    title: string; // titre
    year: string; // année de sortie
  };
  thumbnails: { // jaquettes
    large: string;
    medium: string;
    small: string;
    tiny: string;
    xlarge: string;
  };
}

export interface ApiReturn<T> {
  code: number;
  content: T[];
  count: number;
  description: string;
  details: string;
  limit: number;
  page: number;
  sort: string;
}

export interface ApiParams {
  category?: string;
  page?: number;
  limit?: number;
  sort?: string;
}


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) {
  }

  getList(params: ApiParams | any): Observable<any> {
    if (!params.category) {
      params.category = 'movies';
    }

    return this.http.get('/api/fuuze/content', {params: params});
  }

  get(id: string): Observable<Movie | any> {
    return this.http.get('/api/fuuze/content/' + id);
  }


}
