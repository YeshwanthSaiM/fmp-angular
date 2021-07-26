import { AfterViewInit,Component,Directive, OnInit } from '@angular/core';
import { ElementRef, ViewChild} from '@angular/core';


@Directive({selector: 'child-directive'})
class ChildDirective {
}

@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.scss']
})
export class VacancyComponent implements AfterViewInit {

  @ViewChild(ChildDirective) child!: ChildDirective;
  

  constructor(private _elementRef : ElementRef) { }


  ngOnInit(): void {
    
    /*
    const imageContainer = document.querySelector('.img-container');
    const paths = imageContainer.querySelectorAll('path');
    const desc = document.querySelector('.desc-container')
    paths.forEach(el => {
      el.addEventListener('mouseover', (e:any) => {
        desc.innerHTML = e.target.dataset.desc;
      }, false)
      el.addEventListener('mouseout', (e) => {
        desc.innerHTML = "";
      }, false)
    })
    */
  }

  ngAfterViewInit():void {
    //const ele = this._elementRef.nativeElement.querySelector('img-container');
    console.log("The element");
    console.log(this.child);
  }

}
