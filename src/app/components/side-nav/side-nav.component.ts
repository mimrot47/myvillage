import { AfterViewInit, Component, Input } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})


export class SideNavComponent implements AfterViewInit {
  @Input() showFiller?:boolean|undefined;
  @Input() opened:boolean= true;

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    if(this.showFiller)
    {
      this.opened=this.showFiller;
      console.log("this is called");
    }
  }

}
