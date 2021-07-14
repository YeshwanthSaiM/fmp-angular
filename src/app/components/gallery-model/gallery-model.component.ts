import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-gallery-model',
  templateUrl: './gallery-model.component.html',
  styleUrls: ['./gallery-model.component.scss']
})
export class GalleryModelComponent implements OnInit {
  isLoaded = false;
  projectName!: any;

 constructor( 
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.projectName = this.route.snapshot.paramMap.get('projectName');
  }

  loaded($event:any){
      this.isLoaded = true;
  }

  navigateToGallery() {
    this.router.navigate([`/gallery/${this.projectName}`]);
  }

}
