import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { NgbAlertModule, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})


export class SideNavComponent implements AfterViewInit,OnInit {
  @Input() showFiller?:boolean|undefined;
  @Input() opened:boolean= true;

  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});

  images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);

	constructor(config: NgbCarouselConfig) {
		// customize default values of carousels used by this component tree
		config.interval = 10000;
		config.wrap = true;
		config.keyboard = false;
		config.pauseOnHover = false;
	}

  ngOnInit(): void {
    this.slides[0] = {
      src: './assets/img/angular.jpg',
    };
    this.slides[1] = {
      src: './assets/img/react.jpg',
    }
    this.slides[2] = {
      src: './assets/img/vue.jpg',
    }
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    if(this.showFiller)
    {
      this.opened=this.showFiller;
      console.log("this is called");
    }
  }
  onItemChange($event: any): void {
    console.log('Carousel onItemChange', $event);
  }
}
