import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  showFiller:boolean=false;

  openFiller(){

    if(this.showFiller)
    {
      this.showFiller = false;
    }else{
      this.showFiller = true;
    }
  }

}
