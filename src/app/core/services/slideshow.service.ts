import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Slideshow } from '../model/slideshow';

@Injectable({
  providedIn: 'root'
})
export class SlideshowService {

  private url = environment.apiUrl + '/slideshows';

  constructor(private http: HttpClient) { }

  getSlide(id: number): Observable<Slideshow>{
    return this.http.get<Slideshow>(`${this.url}/${id}`)
  } 
 
}
