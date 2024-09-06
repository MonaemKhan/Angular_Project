import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonService } from '../CommonService/common.service';
import { IMadecineDetails } from 'src/app/Models/Models';

@Injectable({
  providedIn: 'root'
})
export class AddMedicineService {

  constructor(private _http: HttpClient,private _common:CommonService) { }

  getAllMedicine():Observable<IMadecineDetails[]>{
    var responce = this._http.get<IMadecineDetails[]>('http://localhost:3000/MadecineDetailsTable');
    return responce;
  }

  getMedicineDetails(id:number):Observable<IMadecineDetails>{
    var responce = this._http.get<IMadecineDetails>(`http://localhost:3000/MadecineDetailsTable/${id}`);
    return responce;
  }

  postMedicineDetails(data:IMadecineDetails){
    var responce = this._http.post('http://localhost:3000/MadecineDetailsTable',data);
    this._common.restartJsonServer().subscribe(res=>{
      console.log(res);
    });
    return responce;
  }
}
