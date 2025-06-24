import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Slide } from '../model/slide';

@Injectable({
  providedIn: 'root'
})
export class SlideService {

  private url = environment.apiUrl + '/slides';

  constructor(private http: HttpClient) { }

  getSlideById(id: number): Observable<Slide>{
    return this.http.get<Slide>(`${this.url}/${id}`)
  }

}
