import { AfterViewInit,Component,Directive, OnInit } from '@angular/core';
import { ElementRef, ViewChild} from '@angular/core';

declare var $: any;

@Directive({selector: 'child-directive'})
class ChildDirective {
}

@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.scss']
})
export class VacancyComponent implements OnInit,AfterViewInit {

  @ViewChild(ChildDirective) child!: ChildDirective;
  

  constructor(private _elementRef : ElementRef) { }


  ngOnInit(): void {
    
    
  
    
  }

  ngAfterViewInit():void {
    //const ele = this._elementRef.nativeElement.querySelector('img-container');
    const imageContainer = $('.img-container');
    let paths = $('.path');
    const desc =$('.desc-container')
    desc.text("modified")
    $( ".path" ).bind( "mouseover", function(event:any) {
      desc.text("modified")
    });
    $( ".path" ).bind( "mouseout", function() {
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

}
