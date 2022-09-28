// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
// import { ApiService } from './services/api.service';
// @Component({
//   selector: 'app-login',
//   template: `
//   <h1 mat-dialog-title> Login</h1>
//   <div mat-dialog-content>
//      <form [formGroup]="loginForm">
//       <mat-form-field appearance="outline">
//           <mat-label>Email Address</mat-label>
//           <input formControlName="email"  matInput placeholder="Email">
//       </mat-form-field>
//       <mat-form-field appearance="outline">
//           <mat-label>Enter your password</mat-label>
//           <input formControlName="password" type="password"  matInput placeholder="Password">
//       </mat-form-field>
  
//   <div mat-dialog-action [align]="'end'">
//   <button mat-raised-button color="warn" mat-dialog-close>Close</button>
//   <button style="margin-left: 10px;" mat-raised-button color="primary" (click)="login()">{{actionBtn}}</button>
//   </div>
//   `,
//   styles: [`
//     mat-form-field{
//       width: 100%;

//     }
//     `
//   ]
// })
// export class LoginComponent implements OnInit {
//   loginForm!:FormGroup
//   actionBtn : string="Login"
//   constructor(private formBuilder: FormBuilder, private api: ApiService, 
//     private dialogRef: MatDialogRef<LoginComponent>
//     ) { }

    
//   ngOnInit(): void {
//     this.loginForm=this.formBuilder.group({
//       email: ['', Validators.required],
//       password: ['' , Validators.required],
      
//     })
//   }
//   login(){
    
    
//         this.api.postLoan(this.addLoanForm.value)
//         .subscribe({
//           next:(res)=>{
//             alert("Loan added successfully.");
//             this.addLoanForm.reset();  
//             this.dialogRef.close('save');
//           },
//           error:()=>{
//             alert("Error while adding the loan.")
//           }
//         })
       
   
//   }

// }
