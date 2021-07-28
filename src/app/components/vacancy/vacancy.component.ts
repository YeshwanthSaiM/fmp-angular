import { AfterViewInit, Component, Directive, OnInit } from '@angular/core';
import { ElementRef, ViewChild, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

declare var $: any;

@Directive({ selector: 'child-directive' })
class ChildDirective {
}

@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.scss']
})
export class VacancyComponent implements OnInit, AfterViewInit {

  @ViewChild(ChildDirective) child!: ChildDirective;
  @ViewChild('available', { read: TemplateRef }) available!: TemplateRef<any>;
  @ViewChild('booked', { read: TemplateRef }) booked!: TemplateRef<any>;

  constructor(private _elementRef: ElementRef, public dialog: MatDialog) { }
  availableList = [[2, 3, 4, 5, 6, 12, 13, 27, 28, 29, 30, 31, 32, 33, 34, 44, 45, 46, 47, 48, 49],
  [2, 3, 4, 5, 6, 8, 10, 11, 20],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 17, 18, 19, 20, 21, 32, 33, 34, 35, 36, 38, 39, 50, 51, 53, 55, 56, 57],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 19, 20, 21, 22, 33, 35, 36, 37, 38, 42, 5354, 56, 57, 58, 59, 60],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 20, 25, 26, 27, 28, 29, 30, 31, 32, 33, 35, 36, 37, 38, 40, 41, 42, 43, 46, 47]];
  
  paths = [
    "M 599,1733 649,1723 650,1678 591,1679 Z",
    "M 710,1709 775,1699 770,1682 712,1679 Z",
    "M 710,1709 775,1699 770,1682 712,1679 Z",
    "M 712,1677 772,1678 767,1646 711,1648 Z",
    "M 599,1733 649,1723 650,1678 591,1679 Z",
    "M 599,1624 678,1623 680,1440 598,1439 Z",
    "M 710,1480 772,1478 769,1438 711,1439 Z",
    "M 535,1297 571,1299 572,1091 536,1090 Z",
    "M 599,1419 681,1417 679,1091 600,1090 Z",
    "M 710,1417 768,1417 763,1316 714,1090 Z",
    "M 554,196 671,229 677,209 564,176 Z",
    "M 483,371 513,382 575,227 547,218 Z",
    "M 483,371 513,382 575,227 547,218 Z",
    "M 538,389 600,407 662,251 599,234 Z",
    "M 630,417 715,439 735,223 708,215 Z"
  ]

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    //const ele = this._elementRef.nativeElement.querySelector('img-container');
    const imageContainer = $('.img-container');
    let paths = $('.path');
    const desc = $('.desc-container')
    $(".path").bind("mouseover", function (event: any) {
      desc.text("Available")
    });
    $(".path").bind("mouseout", function () {
      desc.text("")
    });
    // paths.forEach((el:any) => {
    //   el.addEventListener('mouseover', (e:any) => {
    //     desc.text = e.target.dataset.desc;
    //   }, false)
    //   el.addEventListener('mouseout', (e:any) => {
    //     desc.text = "";
    //   }, false)
    // })
  }

  getStatus(phase: any, plotno: any) {
    // getStatus : Based on the selection, Shows a modal to know the 
    // status whether the plot is available or booked.
    console.log("Clicked inside svg path with plot no")
    console.log(phase)
    console.log(plotno)
    if (this.availableList[phase].includes(plotno)) {
      this.openModal(this.available);
    } else {
      this.openModal(this.booked);
    }

  }

  openModal(templateRef: any) {
    let dialogRef = this.dialog.open(templateRef, {});
  }
}
