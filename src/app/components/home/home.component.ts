import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngbmodule/material-carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  bestProperties: any[] = [];
  constructor() { }

  ngOnInit(): void {

    this.bestProperties = [
      '../../../assets/360 images/commercial.jpg',
     '../../../assets/360 images/open land.jpg',
     '../../../assets/360 images/residential.jpg',
     '../../../assets/360 images/sample.jpg'
    ];
  }

}
