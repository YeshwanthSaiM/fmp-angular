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
  @ViewChild('availablelink', { read: TemplateRef }) availablelink!: TemplateRef<any>;

  constructor(
    private _elementRef: ElementRef,
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private httpClient: HttpClient) { }

  projectName: any;
  mapPath: any;
  vacancyPath: any;
  vacancy: any;
  viewBoxSize: any;

  forwardLink: any;
  forwardName: any;

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
    this.httpClient.get(this.vacancyPath).subscribe(data => {
      console.log(data);
      this.vacancy = data;
    })
    // setting the view box
    if (this.projectName == 'Rhomes') {
      this.viewBoxSize = "0 0 4963 3509"
    } else if (this.projectName == 'Bloom-City-2') {
      this.viewBoxSize = "0 0 1200 1920"
    } else if (this.projectName == 'Marvel-City-1') {
      this.viewBoxSize = "0 0 1278 1175"
      this.forwardLink = "/vacancy/Marvel-City-Floor"
      this.forwardName = "Floor Plan"
    } else if (this.projectName == 'Marvel-City-Floor') {
      this.viewBoxSize = "0 0 812 782"
      this.forwardLink = "/gallery/Marvel-City-Phase-1"
      this.forwardName = "Flat 3D Tour"
    } else if (this.projectName == 'Green-West'){
      this.viewBoxSize = "0 0 4678 6623"
      this.forwardLink = "/gallery/Green-West"
      this.forwardName = "Plot 3D Tour"
    } else if (this.projectName == 'Dazzler-City'){
      this.viewBoxSize = "0 0 1280 828"
      this.forwardLink = "/gallery/Dazzler-City"
      this.forwardName = "Plot 3D Tour"
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

  getStatus(phase: any, plotno: any, status: any) {
    // getStatus : Based on the selection, Shows a modal to know the 
    // status whether the plot is available or booked.
    console.log("Clicked inside svg path with plot no")
    console.log(phase)
    console.log(plotno)
    console.log(status)

    if (this.projectName == "Marvel-City-1") {
      this.openModal(this.availablelink);
    } else if (this.projectName == "Marvel-City-Floor") {
      this.openModal(this.availablelink);
    } else if (this.projectName == "Green-West"){
      this.openModal(this.availablelink);
    } else if (this.projectName == "Dazzler-City"){
      this.openModal(this.availablelink);
    }
    else {
      if (status == 'available') {
        this.openModal(this.available);
      } else {
        this.openModal(this.booked);
      }
    }
  }

  openModal(templateRef: any) {
    let dialogRef = this.dialog.open(templateRef, {});
  }
}
