import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  postLoan(data: any){
    return this.http.post<any>("http://localhost:3000/loanList/", data)
  }
  getLoan(){
    return this.http.get<any>("http://localhost:3000/loanList/");
  }
  updateLoan(data: any, id: number){
    return this.http.put<any>("http://localhost:3000/loanList/" + id,data)
  }
  deleteLoan(id: number){
    return this.http.delete<any>("http://localhost:3000/loanList/" + id)
  }
}
