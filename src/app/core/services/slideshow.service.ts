import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SlideshowService {

  private url = environment.apiUrl + '/slideshows';

  constructor(private http: HttpClient) { }

  getSlides(){
    
  }


}
