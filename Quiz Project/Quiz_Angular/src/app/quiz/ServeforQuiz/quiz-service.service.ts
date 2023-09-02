import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quiz } from 'src/app/Models/Quiz.Model';

@Injectable({
  providedIn: 'root'
})
export class QuizServiceService {

  url:string = 'https://localhost:7025/api/Quiz'
  constructor(private http:HttpClient) { }

  getAllQuiz():Observable<Quiz[]>{
    return this.http.get<Quiz[]>(this.url);
  }
  postQuiz(data:Quiz):Observable<Quiz>{
    return this.http.post<Quiz>(this.url,data);
  }
}
