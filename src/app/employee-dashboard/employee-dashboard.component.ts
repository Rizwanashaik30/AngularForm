import { Component,OnInit } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';
import { APIService } from '../shared/api.service';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})

export class EmployeeDashboardComponent  implements OnInit{
  // formValue!:FormGroup;
  // iftrue=false
  employeelist:any;
  // row !: any;
  // showAdd!: boolean ;
  // showUpdate!: boolean;
  Employeeform: any;
  APIService: any;
  
    constructor(private Data:APIService){ }

   
      // this.formValue=this.formbuilder.group({
      //   id:[''],
      //   EmployeeID:[''],
      //   FirstName:[''],
      //   LastName:[''],
      //   EmailId:[''],
      //   MobileNO:[''],
      //   salary:['']
      //     })
      ngOnInit(): void {
      this.Data.getMethod().subscribe((result)=>{
        this.employeelist=result;
        console.warn(this.employeelist);
      })}

      postEmployee(data:any){
        this.Data.postEmployees(data).subscribe(final=>{
          console.warn(final);
          // this.iftrue=true;
          this.employeelist=final
        })
      }
      // onEdit(row:any){
      //   this.showAdd = false;
      //   this.showUpdate = true;
      //   this.employeelist.id=row.id;
      //   this.Employeeform.controls['id'].setValue(row.id);
      //   this.Employeeform.controls['EmployeeID'].setValue(row.EmployeeID);
      //   this.Employeeform.controls['FirstName'].setValue(row.FirstName);
      //   this.Employeeform.controls['LastName'].setValue(row.LastName);
      //   this.Employeeform.controls[' EmailId'].setValue(row. EmailId);
      //   this.Employeeform.controls['MobileNO'].setValue(row.MobileNO);
      //   this.Employeeform.controls['salary'].setValue(row.salary);
      // }
      // deleteEmployee(members){
      //   this.APIService.deleteEmployee(members.EmployeeID).subscribe(
      //     (resp: any)=>{
      //       console.log(resp);
      //     },
      //     (          err: any)=>console.log(err)
      //   );
      //     }
      onDelete(id:any){
       this.http.delete

      }
      }
      

      
         




    

    
    
