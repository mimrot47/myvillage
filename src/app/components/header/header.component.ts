import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(public dailogBox:MatDialog){}

  showFiller:boolean=true;

  openFiller(){
    this.showFiller? this.showFiller = false:this.showFiller = true;
  }

  openLginDailog(){
    console.log("clicked on box");
    const dailogRef = this.dailogBox.open(LoginComponent,
      {
        height: "60%",
        width:"30%"
      })
  }
  openSignupDailog(){
    const dailogRef = this.dailogBox.open(SignupComponent,
      {
        height: "83%",
        width:"30%"
      })
  }


}
