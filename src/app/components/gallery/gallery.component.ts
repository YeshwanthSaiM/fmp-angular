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
  isLoaded = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.projectName = this.route.snapshot.paramMap.get('projectName');
    this.projectName = this.projectName.split('-').join(' ');
    console.log(this.projectName)
    if (this.projectName === 'Mount Bay') {
      this.iFrameModel = 'https://www.klapty.com/tour/tunnel/Fpu0P7qcMs';
    } else if (this.projectName === 'Rhomes') {
      this.iFrameModel = 'https://www.klapty.com/tour/tunnel/Lzg04GTqva';
    } else if (this.projectName === 'Dazzler City') {
      this.iFrameModel = 'https://www.klapty.com/tour/tunnel/Fpx0rZMpdG';
    } else if (this.projectName === 'Green West') {
      this.iFrameModel = 'https://www.klapty.com/tour/tunnel/FOz0einTLQ';
    } else if (this.projectName === 'Sunray Township') {
      this.iFrameModel = 'https://www.klapty.com/tour/tunnel/FO30Cj4PJb';
    } else if (this.projectName === 'Marvel City Phase 1') {
      this.iFrameModel = 'https://www.klapty.com/tour/hPT0i2HfWR';
    } else if (this.projectName === 'Marvel City Phase 2') {
      this.iFrameModel = "https://www.klapty.com/tour/tunnel/Lsd03PguIB";
    } else if (this.projectName === 'True Gold Hills') {
      this.iFrameModel = "https://www.klapty.com/tour/LSE0MbSBef";
    } else if (this.projectName === 'Bloom City 2') {
      this.iFrameModel = "https://www.klapty.com/tour/LJ90BsNmT5";
    }
    else {
      this.iFrameModel = 'https://www.klapty.com/tour/tunnel/Fpu0P7qcMs';
    }
  }

  loaded($event: any) {
    this.isLoaded = true;
  }

  navigateTodetails() {
    this.router.navigate([`/details/${this.projectName}`]);
  }

  navigateTo3dModel() {
    this.router.navigate([`/gallery-model/${this.projectName}`]);
  }

}
