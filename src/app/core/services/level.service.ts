import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Level, LevelResponse } from '../model/level';

@Injectable({
  providedIn: 'root'
})
export class LevelService {

  private url = environment.apiUrl + '/levels';

  constructor(private http: HttpClient) { }

  getLevels(): Observable<Level[]>{
    return this.http.get<LevelResponse>(this.url).pipe(
      map(res => res.levels),
      catchError(this.handleError)
    )
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
