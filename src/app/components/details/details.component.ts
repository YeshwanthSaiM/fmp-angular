import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ActivatedRoute, Router, RouterModule } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  @Input('rating') private rating: number = 3;
  @Input('starCount') private starCount: number = 5;
  @Input('color') private color: string = 'accent';
  @Output() private ratingUpdated = new EventEmitter();

  constructor(
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  view = false
  snackBarDuration: number = 2000;
  ratingArr: any
  project: any
  changeView() {
    this.view = !this.view
    this.mapInit()
  }

  ngOnInit(): void {
    this.mapInit()
    this.ratingArr = []
    for (let index = 0; index < this.starCount; index++) {
      this.ratingArr.push(index);
    }
    // this.projectName = this.route.snapshot.params['projectName'];
    this.project = {
      "projectName": "APARNA ONE",
      "promoterName": "APARNA INFRAHOUSING PRIVATE LIMITED",
      "tsrera": "P02500000269",
      "type": "residential",
      "location": {
        "state": "Telangana",
        "city": "Hyderabad",
        "locality": "SHEIKPET",
        "district": "Hyderabad",
        "Mandal": "Shaikpet",
        "colony": "Old Bombay Highway",
        "pincode": 500019
      },
      "locationHighlights": [
        "Near to Raheja Mindspace IT Park ",
        "6 km International Tech Park",
        "Near Cyber Pearl"
      ],
      "amenities": [
        "club house",
        "Sports Area",
        "Swimming Pool",
        "Spa",
        "Gym",
        "Children Play Area"
      ],
      "description": "There are various amenities in Aparna One with to name a few. Located close to prominent suburbs of Hyderabad, the area of Hyderabad District has prominent schools and hospitals within a close distance.",
      "projectImageUrl": "https://is1-3.housingcdn.com/4f2250e8/bb953b1c0fc92691cdf5565ac0609fcb/v0/large/aparna_one-shaikpet-hyderabad-aparna_constructions_and_estates_pvt._ltd..jpeg",
      "projectVideoUrl": "https://www.youtube.com/embed/3KKK2ufykos",
      "noOfFloors": 30,
      "properties": [
        {
          "type": "residential",
          "unit": "3,4 BHK",
          "size": 2635,
          "sizeType": "sft",
          "sizes": [
            2635,
            2875,
            4155,
            5216
          ],
          "unitPrice": 11999,
          "totalPrice": 35000000,
          "imageUrls": [
            "https://is1-3.housingcdn.com/012c1500/e8df6d6d6b12c313caef241a2d2429bc/v0/fs/aparna_one-shaikpet-hyderabad-aparna_constructions_and_estates_pvt._ltd..jpeg",
            "https://is1-3.housingcdn.com/012c1500/bfa29b92763577efa38a5f433649cf3e/v0/fs/aparna_one-shaikpet-hyderabad-aparna_constructions_and_estates_pvt._ltd..jpeg",
            "https://is1-3.housingcdn.com/012c1500/08b170ef8e5949b84ad70201163b3099/v0/fs/aparna_one-shaikpet-hyderabad-aparna_constructions_and_estates_pvt._ltd..jpeg",
            "https://is1-2.housingcdn.com/012c1500/d13d980cd3d1cb45bee6dcf5c8ba5940/v0/fs/aparna_one-shaikpet-hyderabad-aparna_constructions_and_estates_pvt._ltd..jpeg"
          ],
          "videoUrls": [
            "https://www.youtube.com/embed/3KKK2ufykos"
          ],
          "otherDetails": {
            "possessionDate": "MAR-2023"
          }
        }
      ]
    }
    console.log(this.project.properties)
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

  async mapInit() {
    $(() => {
     
      $('body').append(`
     
      <script type='text/javascript'> 
      function GetMap(){       
        var mapCenter = new Microsoft.Maps.Location(17.43294347294238,78.3137395);
        var map = new Microsoft.Maps.Map('#myMap', {
          credentials: 'Al0BEFJS2vf1KrgjcK1FSitkQ9qqqvKFda5SaDFSHvUgU4513o8c6C62leKvhrxM',
             center: mapCenter,
            zoom: 10,
            allowHidingLabelsOfRoad: true

        });
        map.setView({ labelOverlay: Microsoft.Maps.LabelOverlay.hidden});
        var locations = [{
          "projectName": "ALIENS HUB",
          "type": "residential",
          "geographiCoordiates": {
            "latitude": "17.462052719220846",
            "longitude": " 78.28491672633336"
          }
        },
        {
          "projectName": "Hillcrest Phase1",
          "type": "residential",
          "geographiCoordiates": {
            "latitude": "17.408315582085642",
            "longitude": "78.33823886511625"
          }
        }
          , {
          "projectName": "JUBILEE TEMPLE TREE",
          "type": "residential",
          "geographiCoordiates": {
            "latitude": "17.365488611320366",
            "longitude": "78.54508157756811"
          }
        },
        {
          "projectName": "MAGIC BREEZE",
          "type": "residential",
          "geographiCoordiates": {
            "latitude": "17.385179041271368",
            "longitude": "78.37113395958552"
          }
        },
        {
          "projectName": "Manbhum Around the Grove",
          "type": "residential",
          "geographiCoordiates": {
            "latitude": "17.549545135850394",
            "longitude": "78.43528270090823"
          }
        },
        {
          "projectName": "Mount Bay",
          "type": "open land",
          "geographiCoordiates": {
            "latitude": "17.04957492142803",
            "longitude": "78.81904362628431"
          }
        },
        {
          "projectName": "MS VESSELLA MEADOWS",
          "type": "residential",
          "geographiCoordiates": {
            "latitude": "17.3761080234446",
            "longitude": "78.37821321098565"
          }
        },
        {
          "projectName": "MY HOME KRISHE",
          "type": "residential",
          "geographiCoordiates": {
            "latitude": "17.432501970930396",
            "longitude": "78.32927754232676"
          }
      
        },
        {
          "projectName": "MYSCAPEISLE OF SKY",
          "type": "residential",
          "geographiCoordiates": {
            "latitude": "17.41390046748191",
            "longitude": "78.33489276861702"
          }
        },
        {
          "projectName": "R V Askhobya",
          "type": "residential",
          "geographiCoordiates": {
            "latitude": "27.2046 N",
            "longitude": "77.4977 E"
          }
        },
        {
          "projectName": "R V SOMWRITA",
          "type": "residential",
          "geographiCoordiates": {
            "latitude": "17.549545135850394",
            "longitude": "78.43528270090823"
          }
        },
        {
          "projectName": "Sensation Fortune Bhoomika Mall and multiplex",
          "type": "commercial",
          "geographiCoordiates": {
            "latitude": "17.38389934518271",
            "longitude": "78.3608952910905"
          }
        },
        {
          "projectName": "SILVER OAK VILLAS",
          "type": "residential",
          "geographiCoordiates": {
            "latitude": "17.549545135850394",
            "longitude": "78.43528270090823"
          }
      
        },
        {
          "projectName": "SMR SMs VINAY CASA CARINO",
          "type": "residential",
          "geographiCoordiates": {
            "latitude": "17.350727604376534",
            "longitude": "78.38791888465353"
          }
        },
        {
          "projectName": "SOLITAIRE HEIGHTS",
          "type": "residential",
          "geographiCoordiates": {
            "latitude": "17.43294347294238",
            "longitude": "78.44478752447665"
          }
        },
        {
          "projectName": "TULASI LAKE FRONT",
          "type": "residential",
          "geographiCoordiates": {
            "latitude": "17.549545135850394",
            "longitude": "78.43528270090823"
          }
        },
        {
          "projectName": "VESSELLA WOODS",
          "type": "residential",
          "geographiCoordiates": {
            "latitude": "17.484473406748705",
            "longitude": "78.33902843209496"
          }
        }
        ] 
        console.log(${this.view})    
        locations.forEach((location) => {
         if((location.type=='residential' && ${this.view})||(location.type!='residential' && ${!this.view})){ var icon=''          
          if(location.type=='residential' && ${this.view})
            icon='<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M1 22h2v-22h18v22h2v2h-22v-2zm7-3v4h3v-4h-3zm5 0v4h3v-4h-3zm-6-5h-2v2h2v-2zm8 0h-2v2h2v-2zm-4 0h-2v2h2v-2zm8 0h-2v2h2v-2zm-12-4h-2v2h2v-2zm8 0h-2v2h2v-2zm-4 0h-2v2h2v-2zm8 0h-2v2h2v-2zm-12-4h-2v2h2v-2zm8 0h-2v2h2v-2zm-4 0h-2v2h2v-2zm8 0h-2v2h2v-2zm-12-4h-2v2h2v-2zm8 0h-2v2h2v-2zm-4 0h-2v2h2v-2zm8 0h-2v2h2v-2z"/></svg>'
          else
            icon='<svg xmlns="http://www.w3.org/2000/svg" color="red" width="24" height="24" viewBox="0 0 24 24"> <g color="green"><circle r="25" cx="50" cy="50" stroke="currentcolor" fill="none" stroke-width="5" /></g><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>'
          let marker = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(location.geographiCoordiates.latitude, location.geographiCoordiates.longitude),{
              title: location.projectName, 
              icon:icon
            });
            map.entities.push(marker);}
        }); 
      }             
        </script>
         <script type = 'text/javascript' src = 'http://www.bing.com/api/maps/mapcontrol?callback=GetMap&key=Al0BEFJS2vf1KrgjcK1FSitkQ9qqqvKFda5SaDFSHvUgU4513o8c6C62leKvhrxM' defer > </script>
       
       `)

    })
  }

  openGallery(projectName: any) {
    projectName = projectName.split(' ').join('-')
    this.router.navigate([`/gallery/${projectName}`]);
  }

  back() {
    this.router.navigate([`/properties`]);
  }

}
export enum StarRatingColor {
  primary = "primary",
  accent = "accent",
  warn = "warn"
}