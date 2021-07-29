import { AfterViewInit, Component, Directive, OnInit } from '@angular/core';
import { ElementRef, ViewChild, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";

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

  constructor(
    private _elementRef: ElementRef,
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private httpClient: HttpClient) { }
  projectName: any;
  mapPath: any;
  vacancyPath: any;
  vacancy :any ;
  viewBoxSize : any;

  ngOnInit(): void {
    this.projectName = this.route.snapshot.paramMap.get('projectName');
    this.mapPath = "../../../assets/vacancy/" + this.projectName + "/map.jpg";
    this.vacancyPath = "../../../assets/vacancy/" + this.projectName + "/vacancy.json";
    
    console.log("project name")
    console.log(this.projectName)
    console.log("the json path");
    console.log(this.vacancyPath);
    console.log("The map path")
    console.log(this.mapPath)
    this.httpClient.get(this.vacancyPath).subscribe(data =>{
      console.log(data);
      this.vacancy = data;
    })
    // setting the view box
    if(this.projectName == 'Rhomes'){
      this.viewBoxSize = "0 0 4963 3509"
    }else if(this.projectName == 'Bloom-City-2'){
      this.viewBoxSize = "0 0 1200 1920"
    }
    console.log("View Box")
    console.log(this.viewBoxSize);
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
  }

  getStatus(phase: any, plotno: any,status: any) {
    // getStatus : Based on the selection, Shows a modal to know the 
    // status whether the plot is available or booked.
    console.log("Clicked inside svg path with plot no")
    console.log(phase)
    console.log(plotno)
    console.log(status)
    // this.openModal(this.available);
    if (status == 'available'){
      this.openModal(this.available);
    }else{
      this.openModal(this.booked);
    }
  }

  openModal(templateRef: any) {
    let dialogRef = this.dialog.open(templateRef, {});
  }
}
