import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Language, LanguageResponse } from '../model/language';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private url = environment.apiUrl + '/languages';

  constructor(private http: HttpClient) { }

  getLanguages(): Observable<Language[]>{
    return this.http.get<LanguageResponse>(this.url).pipe(
      map(res => res.languages),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          // Client-side or network error
          errorMessage = `Error: ${error.error.message}`;
        } else {
          // Backend error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        return throwError(errorMessage);
    }  


}
