import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  addLoanForm!:FormGroup
  actionBtn : string="Save"
  constructor(private formBuilder: FormBuilder, private api: ApiService, 
    @Inject(MAT_DIALOG_DATA) public editData : any,
    private dialogRef: MatDialogRef<DialogComponent>) { }

  ngOnInit(): void {
    this.addLoanForm=this.formBuilder.group({
      loanType: ['', Validators.required],
      lender: ['' , Validators.required],
      loanAmount: ['' , Validators.required],
      loanIssueDate: [ Validators.required],
      paymentDue: [ Validators.required],
      loanStatus: ['Active']
    })
    if(this.editData){
      this.actionBtn="Update"
      this.addLoanForm.controls['loanType'].setValue(this.editData.loanType);
      this.addLoanForm.controls['lender'].setValue(this.editData.lender);
      this.addLoanForm.controls['loanAmount'].setValue(this.editData.loanAmount);
      this.addLoanForm.controls['loanIssueDate'].setValue(this.editData.loanIssueDate);
      this.addLoanForm.controls['paymentDue'].setValue(this.editData.paymentDue);
      
    }
  }
  
  
  addLoan(){
    if(!this.editData){
      if(this.addLoanForm.valid){
        this.api.postLoan(this.addLoanForm.value)
        .subscribe({
          next:(res)=>{
            alert("Loan added successfully.");
            this.addLoanForm.reset();  
            this.dialogRef.close('save');
          },
          error:()=>{
            alert("Error while adding the loan.")
          }
        })
       }
    } else{
       this.updateLoan()
    }  
  }
  updateLoan(){
    this.api.updateLoan(this.addLoanForm.value, this.editData.id)
    .subscribe({
      next:(res)=>{
        alert("Loan Updated Successfully.");
        this.addLoanForm.reset();
        this.dialogRef.close('update')
      },
      error: ()=>{
        alert("Error while adding the loan.")
      }
    })

  }
}
