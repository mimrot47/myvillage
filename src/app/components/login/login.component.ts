import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hide = true;

 constructor(public dailogRef:MatDialogRef<LoginComponent>, ){}

  loginClose(){
  this.dailogRef.close();
  }
  userLogin(item:any){
console.log(item);
  }
}

