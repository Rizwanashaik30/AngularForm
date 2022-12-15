import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  Url=" http://localhost:3453/posts";
  constructor(private http:HttpClient) { }

  
 getMethod(){
   return this.http.get(this.Url);
 }
 postEmployees(data:any){
  return this.http.post(this.Url,data)
 }

//  update(data:any,id:number){
//   return this.http.put("Url"+id,data)
//  }
//  public deleteEmployee(id){
//   return this.http.delete(this.Url + '/deleteEmployee? +id')
//  }
onDelete(id:any){
  this.http.delete('Url'+id+'.json')
}
}
