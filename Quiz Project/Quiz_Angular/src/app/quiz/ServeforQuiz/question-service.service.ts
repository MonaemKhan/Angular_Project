import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from 'src/app/Models/Question.Model';

@Injectable({
  providedIn: 'root'
})
export class QuestionServiceService {

  url:string = 'https://localhost:7025/api/Question'
  constructor(private http:HttpClient) { }

  getAllQuestion():Observable<Question[]>{
    return this.http.get<Question[]>(this.url);
  }
  postQuestion(data:Question):Observable<Question>{
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<Question>(this.url,data,httpOptions);
  }
  getQuestion(Id:number):Observable<any[]>{
    return this.http.get<any[]>(`${this.url}/Id:int?Id=${Id}`);
  }
  putQuestion(Id:number,data:any):Observable<any>{
    return this.http.put<any>(`${this.url}/Id:int?Id=${Id}`,data);
  }
  deleteQuestion(Id:number):Observable<any>{
    return this.http.delete<any>(`${this.url}/Id:int?Id=${Id}`)
  }
}
