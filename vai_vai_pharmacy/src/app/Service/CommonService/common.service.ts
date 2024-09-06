import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICompanyTable, IMedicineCatagoryTable, IStrengthTable } from 'src/app/Models/Models';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _http: HttpClient) { }

  getAllCompany():Observable<ICompanyTable[]>{
    return this._http.get<ICompanyTable[]>("http://localhost:3000/CompanyTable");
  }

  getAllMedicineCatagory():Observable<IMedicineCatagoryTable[]>{
    return this._http.get<IMedicineCatagoryTable[]>("http://localhost:3000/MedicineCatagoryTable");
  }

  getAllStrangth():Observable<IStrengthTable[]>{
    return this._http.get<IStrengthTable[]>("http://localhost:3000/StrengthTable");
  }

  restartJsonServer(): Observable<any> {
    return this._http.post('http://localhost:3001/restart-json-server', {});
  }
}
