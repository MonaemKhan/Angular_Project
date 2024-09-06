import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ICompanyTable, IMedicineCatagoryTable, IMadecineDetails, IStrengthTable } from 'src/app/Models/Models';
import { CommonService } from '../../Service/CommonService/common.service';
import { AddMedicineService } from '../../Service/AddMedicine/add-medicine.service';

@Component({
  selector: 'app-add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrls: ['./add-medicine.component.css']
})
export class AddMedicineComponent implements OnInit {
  // variable Declare start
  companyList:ICompanyTable[] = [];
  medicineCatagoryList:IMedicineCatagoryTable[] = [];
  strangthList:IStrengthTable[] = [];
  medicineDetailsList:IMadecineDetails[] = [];

  medicine: IMadecineDetails = {
    id: 0,
    MedicineName: '',
    MedicineCatagory: 'Tablet',
    MedicineGenericName: '',
    CompanyName: '',
    strangth: '5 mg',
    SideEffect: '',
    Consumer: 'Adult',
    ConsumeType: 'Oral'
  };

  consumers: string[] = ['Adult', 'Child', 'Others'];
  consumeTypes: string[] = ['Oral', 'Injection', 'Others'];

  filteredCompanyList: ICompanyTable[] = [];
  isfilteredCompanyListShow = false;

  //Variable Declare End
  
  constructor(private _common:CommonService,private _addMedicine:AddMedicineService){  }
  
  async ngOnInit() {
    await this.getPreloadData();
  }

  async getPreloadData(){
    this.companyList = await lastValueFrom(this._common.getAllCompany());
    this.medicineCatagoryList = await lastValueFrom(this._common.getAllMedicineCatagory());
    this.strangthList = await lastValueFrom (this._common.getAllStrangth());
    this.medicineDetailsList = await lastValueFrom(this._addMedicine.getAllMedicine())
  }


  filterCompanyList() {
    this.isfilteredCompanyListShow = true;
    const query = this.medicine.CompanyName.toLowerCase();
    this.filteredCompanyList = this.companyList.filter(company => company.CompanyName.toLowerCase().includes(query));
  }

  selectCompany(company: string) {
    this.isfilteredCompanyListShow = false;
    this.medicine.CompanyName = company;
    this.filteredCompanyList = []; // Clear the suggestion list after selection
  }

  selctCompanyListFocusout(){
    this.isfilteredCompanyListShow = false;
    this.filteredCompanyList = []; // Clear the suggestion list after selection
  }

  onSubmit() {
    this.medicine.id = Math.max(...this.medicineDetailsList.map(item => Number(item.id)))+1;
    console.log('Form submitted:', this.medicine);
    this._addMedicine.postMedicineDetails(this.medicine).subscribe(responce=>{
      console.log(responce);
    });
  }

}
