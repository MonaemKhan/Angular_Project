
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RequestService } from '../service/request.service';
import { map, tap } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-apirequest',
  templateUrl: './apirequest.component.html',
  styleUrls: ['./apirequest.component.css']
})
export class ApirequestComponent implements OnInit {

  
  //url = 'https://jsonplaceholder.typicode.com/posts';
  //url = 'https://localhost:7295/swagger/index.html';
  data: any;
  isLoading = true;
  dataupdate=false;
  update_alert = false;
  delete_alert= false;
  // constructor(private http: HttpClient) {

  // }

  loginform?:FormGroup;
  
  


  constructor(private requestservice : RequestService,private fb :FormBuilder)
  {


  }
  result = null;
  // ngOnInit(): void {
  //   this.http.get(this.url)
  //     .subscribe((result) => {
  //       console.log(result);
  //       this.data = result;
  //     })
  // }

  ngOnInit(): void {

    

      this.loginform = this.fb.group({
        id:[''],
        name:[''],
        email:[''],
        contact:['']
        //userId:[''],
       // title:[''],
       // body:['']
      })


    this.requestservice.getdata().pipe(

      tap(()=>
      {
           this.isLoading =false;
      }
      )


      //map works

      //  map((res:any)=>{

      //    return res.filter((p:any) =>p.userId==1)


      //  }
      //  )
       
       )

      
      // 
      // for tap 
      //  this.requestservice.getdata().subscribe((res)=>{
      //   this.data = res;
      //  })


//        //  for Map 



        .subscribe((res)=>{
         this.data=res
       })

       
    

    
  }

  formvaluecontrol(a)
  {
     return this.loginform.get(a);
  }

  datasubmit()
  {
           return  console.log(this.loginform.value);
  }



createdata(){

  if(!this.dataupdate){
  this.requestservice.createdata(this.loginform.value)
  .subscribe((res)=>
  {
    console.log(res);
    this.data.push(res);
    this.loginform.reset();

  })


}

else {


  this.requestservice.updatedata(this.loginform.value)

  .subscribe((res)=>
  {

    const tempdata = this.data.find((i) => i.id === res.id);
    const position = this.data.indexOf(tempdata);
    this.data[position] = res;
    console.log(res);
    // this.data.push(res);
    this.loginform.reset();
    this.dataupdate = false;
    this.update_alert = true;

  })


  


  
}




}

selectdata(data)
{
  console.log(data);
  this.loginform.patchValue(data);
  this.dataupdate = true;

}

deletedata(id){

  this.delete_alert= true;
  this.requestservice.deletedata(id)
  .subscribe((result)=>{
    console.log(result);
    this.data = this.data.filter((i)=> i.id !==id)

  })
  


}
}
 



  


