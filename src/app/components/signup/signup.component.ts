import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  hide=true;
  hideConfirm=true;
  constructor(public ref:MatDialogRef<SignupComponent>){}

  signupData(item:any){
console.log(item);
  }

  closeSignup(){
 this.ref.close();
  }
}
