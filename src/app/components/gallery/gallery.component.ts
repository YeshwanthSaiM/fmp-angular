import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  projectName!: any;
  iFrameModel!: string;

  constructor( 
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.projectName = this.route.snapshot.paramMap.get('projectName');

    if (this.projectName.toLowerCase() === 'mount bay') {
      this.iFrameModel = 'https://www.klapty.com/tour/tunnel/Fpu0P7qcMs';
    } else if (this.projectName.toLowerCase() === 'rhomes') {
      this.iFrameModel = 'https://www.klapty.com/tour/tunnel/FpI0J8vMYi';
    } else if (this.projectName.toLowerCase() === 'dazzlercity') {
      this.iFrameModel = 'https://www.klapty.com/tour/tunnel/Fpx0rZMpdG';
    }else if (this.projectName.toLowerCase() === 'green west') {
      this.iFrameModel = 'https://www.klapty.com/tour/tunnel/FOz0einTLQ';
    }else if (this.projectName.toLowerCase() === 'sunray township') {
      this.iFrameModel = 'https://www.klapty.com/tour/tunnel/FO30Cj4PJb';
    } else if (this.projectName.toLowerCase() === 'marvel city phase 1') {
      this.iFrameModel = 'https://www.klapty.com/tour/tunnel/Lsz0einTLQ';
    } else if (this.projectName.toLowerCase() === 'marvel city phase 2') {
      this.iFrameModel = "https://www.klapty.com/tour/tunnel/Lsd03PguIB";
    } else {
      this.iFrameModel = 'https://www.klapty.com/tour/tunnel/Fpu0P7qcMs';
    }
  }

  navigateTodetails() {
    this.router.navigate([`/details/${this.projectName}`]);
  }

}
