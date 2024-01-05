import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) {}

  private accessSource = new BehaviorSubject<number>(null);
  access$ = this.accessSource.asObservable();

  setAccess(access: number) {
    this.accessSource.next(access);
    console.log(access);
  }

  getAccessValue(): Observable<number> {
    return this.access$.pipe(
      take(1),
      tap(n => console.log(n))
    );
  }

  getdata(): Observable<any> {
    return this.http.get('https://localhost:7295/api/Student');
  }

  createdata(data: any): Observable<any> {
    return this.http.post('https://localhost:7295/api/Student', data);
  }

  updatedata(post: any): Observable<any> {
    return this.http.put(`https://localhost:7295/api/Student/${post.id}`, post);
  }

  deletedata(id: any): Observable<any> {
    return this.http.delete(`https://localhost:7295/api/Student/${id}`);
  }
}
