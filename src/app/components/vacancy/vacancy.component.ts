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
    
    
    const imageContainer = $('.img-container');
    const paths = $('path');
    const desc =$('.desc-container')
    paths.forEach((el:any) => {
      el.addEventListener('mouseover', (e:any) => {
        desc.innerHTML = e.target.dataset.desc;
      }, false)
      el.addEventListener('mouseout', (e:any) => {
        desc.innerHTML = "";
      }, false)
    })
    
  }

  ngAfterViewInit():void {
    //const ele = this._elementRef.nativeElement.querySelector('img-container');
    console.log("The element");
    console.log(this.child);
  }

}
