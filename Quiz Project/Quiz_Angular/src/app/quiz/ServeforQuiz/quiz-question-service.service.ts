import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizQuestionServiceService {

  url:string = "https://localhost:7025/api/QuizQuestion";
  constructor(private http:HttpClient) { }
  
  GetAllQuizDetails():Observable<any>{
    return this.http.get<any>(this.url);
  }
  GetQuizDetails(Id:number):Observable<any>{
    return this.http.get<any>(this.url+'/Id:int?Id='+Id)
  }
  GetQuestionDetails(Id:number):Observable<any>{
    return this.http.get<any>(this.url+'/QId:int?QId='+Id)
  }
}
