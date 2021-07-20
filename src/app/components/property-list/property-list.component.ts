import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation, OnDestroy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Router, RouterModule } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit, OnDestroy {

  @Input('rating') private rating: number = 3;
  @Input('starCount') private starCount: number = 5;
  @Input('color') private color: string = 'accent';
  @Output() private ratingUpdated = new EventEmitter();
  snackBarDuration: number = 2000;
  ratingArr: any
  filterTerm!: string;
  properties: any[] = [];
  propertyType: string  = 'residential';
  propertyShow: any[] = [];
  subscription!: Subscription;

  constructor(
    private snackBar: MatSnackBar,
    private route: Router,
    private propertyService: PropertyService,
  ) { }


  ngOnInit(): void {
    console.log("a " + this.starCount)
    this.ratingArr = []
    for (let index = 0; index < this.starCount; index++) {
      this.ratingArr.push(index);
    }

    this.subscription = this.propertyService.getAll().subscribe(res => {
      this.properties.push(res);
      this.changePropertyType();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getEvents(): any[] {
    return this.properties;
  }

  tabChange(event: MatTabChangeEvent) {
    this.propertyType = event.tab.textLabel.toLocaleLowerCase();
    this.changePropertyType();
  }

  changePropertyType() {
    this.propertyShow = [];

    if (this.propertyType == 'residential') {
      for (var val of this.properties) {
        if (val.type == this.propertyType) {
          this.propertyShow.push(val)
        };
      }
    }

    if (this.propertyType == 'open land') {
      for (var val of this.properties) {
        if (val.type == this.propertyType) {
          this.propertyShow.push(val)
        };
      }
    }

    if (this.propertyType == 'commercial') {
      for (var val of this.properties) {
        if (val.type == this.propertyType) {
          this.propertyShow.push(val)
        };
      }
    }
  }

  changeCheck() {
    for (let project of this.properties) {
      if (project.isChecked) {
        console.log(project);
      }
    }
  }

  onClick(rating: number) {
    console.log(rating)
    this.snackBar.open('You rated ' + rating + ' / ' + this.starCount, '', {
      duration: this.snackBarDuration
    });
    this.ratingUpdated.emit(rating);
    return false;
  }

  showIcon(index: number) {
    if (this.rating >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }

  details(response: any) {
    const projectName = response.projectName.split(' ').join('-');
    this.route.navigateByUrl(`/details/${projectName}`);
  }

  openGallery(projectName: any) {
    projectName = projectName.split(' ').join('-');
    this.route.navigate([`/gallery/${projectName}`]);
  }

}

export enum StarRatingColor {
  primary = "primary",
  accent = "accent",
  warn = "warn"
}