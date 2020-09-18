import { Injectable } from '@angular/core';
import { DreamCatcher } from '../shared/dream';
import { DREAMS } from '../shared/dreams';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { ProcesshttpmsgService } from './processhttpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class DreamService {

  constructor(private http: HttpClient, 
    private processhttpmsgService: ProcesshttpmsgService) { }

  getDreams(): Observable<DreamCatcher[]> {
    return this.http.get<DreamCatcher[]>(baseURL + 'dreams')
      .pipe(catchError(this.processhttpmsgService.handleError));
  }

  getDream(id: number): Observable<DreamCatcher> {
    return this.http.get<DreamCatcher>(baseURL + 'dreams/' + id)
    .pipe(catchError(this.processhttpmsgService.handleError));

  }

  getFeaturedDream(): Observable<DreamCatcher> {
    return this.http.get<DreamCatcher[]>(baseURL + 'dreams?featured=true').pipe(map(dreams => dreams[0]))
    .pipe(catchError(this.processhttpmsgService.handleError));
  }

  getDreamIds(): Observable<number[] | any> {
    return this.getDreams().pipe(map(dreams => dreams.map(dream => dream.id)))
    .pipe(catchError(error => error));
  }

  putDream(dream: DreamCatcher): Observable<DreamCatcher> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.put<DreamCatcher>(baseURL + 'dreams/' + dream.id, dream, httpOptions)
      .pipe(catchError(this.processhttpmsgService.handleError));

  }
  
}

// getDreams(): Promise<DreamCatcher[]> {
//   // return new Promise(resolve=> {
//   //   // Simulate server latency with 2 second delay
//   //     setTimeout(() => resolve(DREAMS), 2000);
//   // });
//   return of(DREAMS).pipe(delay(2000)).toPromise();
// }
//  
// getFeaturedDream(): Promise<DreamCatcher> {
//   // return  new Promise(resolve=> {
//   //   // Simulate server latency with 2 second delay
//   //     setTimeout(() => resolve(DREAMS.filter((dream) => dream.featured)[0]), 2000);
//   // });
//   return of(DREAMS.filter((dish) => dish.featured)[0]).pipe(delay(2000)).toPromise();
// }




// getDreams(): Observable<DreamCatcher[]> {
//   return of(DREAMS).pipe(delay(2000));
// }

// getDream(id: string): Observable<DreamCatcher> {
//   return of(DREAMS.filter((dream) => (dream.id === id))[0]).pipe(delay(2000));
// }

// getFeaturedDream(): Observable<DreamCatcher> {
//   return of(DREAMS.filter((dream) => dream.featured)[0]).pipe(delay(2000));
// }

// getDreamIds(): Observable<string[] | any> {
//   return of(DREAMS.map(dream => dream.id));
// }