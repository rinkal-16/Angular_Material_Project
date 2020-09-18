import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';


@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor(private http: HttpClient) { }

  getLeaders(): Observable<Leader[]> {
    return this.http.get<Leader[]>(baseURL + 'leadership');
  }

  getLeader(id: string): Observable<Leader> {
    return this.http.get<Leader>(baseURL + 'leadership/' + id);
  }

  getFeaturedLeader(): Observable<Leader> {
    return this.http.get<Leader[]>(baseURL + 'leadership?featured=true').pipe(map(leadership => leadership[0]));
  }

  getLeaderIds(): Observable<number[] | any> {
    return this.getLeaders().pipe(map(leadership => leadership.map(leadership => leadership.id)));
  }

  
}


// getLeaders(): Observable<Leader[]> {
//   return of(LEADERS).pipe(delay(2000));
// }

// getLeader(id: string): Observable<Leader> {
//   return of(LEADERS.filter((leader) => (leader.id === id))[0]).pipe(delay(2000));
// }

// getFeaturedLeader(): Observable<Leader> {
//   return of(LEADERS.filter((leader) => leader.featured)[0]).pipe(delay(2000));
// }