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
      '../../../assets/images/thumbnail/Chandhana Gardens.jpg',
      '../../../assets/images/thumbnail/Dazzler City.jpg',
      '../../../assets/images/thumbnail/Green West.jpg',
   
    ];
  }

}
