import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Slideshow } from '../model/slideshow';
import { Slide } from '../model/slide';

@Injectable({
  providedIn: 'root'
})
export class SlideshowService {

  private url = environment.apiUrl + '/slideshows';

  constructor(private http: HttpClient) { }

  getSlides(): Observable<Slide[]>{
    return this.http.get<Slide[]>(this.url)
  }

  getSlide(id: number): Observable<Slideshow>{
    return this.http.get<Slideshow>(`${this.url}/${id}`)
  }

}
