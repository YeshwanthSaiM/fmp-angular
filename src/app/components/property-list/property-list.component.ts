import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {

  @Input('rating') private rating: number = 3;
  @Input('starCount') private starCount: number = 5;
  @Input('color') private color: string = 'accent';
  @Output() private ratingUpdated = new EventEmitter();
  snackBarDuration: number = 2000;
  ratingArr: any
  constructor(private snackBar: MatSnackBar,private route:Router) { }
  projects = [{
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
  }, {
    "projectName": "ALIENS HUB",
    "promoterName": "ALIENS SMART CITY PVT LTD",
    "tsrera": " P02400002497",
    "locationHighlights": [
      "4kms lingampally MMTS",
      "1.4KMS to wipro circle",
      "0.7kms to delhi public school"
    ],
    "location": {
      "state": "Telangana",
      "city": "Hyderabad",
      "locality": "Tellapur",
      "district": "RANGA REDDY",
      "Mandal": "Thalakondapally",
      "colony": "Tellapur",
      "pincode": 509206
    },
    "amenities": [
      "Mini Theatre",
      "Swimming Pool",
      "Golf Course",
      "ATM",
      "Barbecue",
      "Restaurant",
      "Sauna",
      "Spa",
      "Creche/Day care",
      "sky garden",
      "1km of walking corridor",
      "27 feet height Lobby",
      "Double-Height Car Parking",
      "High speed Lifts",
      "More than 2 Lacs sft Clubhouse & Amenities",
      "Glass Walls",
      "Personalized Corridors",
      "Helipad- for safety",
      "45 Acres Natural Lake",
      "Planetarium on the 30th Floor",
      "1.7km Jogging & Bicycle Track",
      "34 Sky Gardens"
    ],
    "description": "Space Station Township is a luxury residential township based out of Hyderabad. Cassini, Epsilon, Alcantara, Hubble, Aurora, Orion, Venera, Vostac, Euclid, Salyut, Atrex, Soyuz and Atlantic are projects within the Space Station Township for which bookings are currently open. Deliveries have started for Cassini and deliveries will start within 1year for Epsilon.",
    "projectImageUrl": "https://is1-2.housingcdn.com/4f2250e8/05b3fe0e13389db52c4e8d88e0fb21c6/v3/large/aliens_space_station-gachibowli-hyderabad-aliens_group.jpg",
    "projectVideoUrl": "https://www.youtube.com/embed/URNonpXr33c",
    "noOfFloors": 12,
    "type": "residential",
    "properties": [
      {
        "type": "residential apartments",
        "unit": "2, 3 BHK and Duplex",
        "size": 1687,
        "sizeType": "sft",
        "sizes": [
          1687,
          1874,
          2150,
          2191
        ],
        "unitPrice": 5450,
        "totalPrice": 12000000,
        "imageUrls": [
          "https://accuratewindchimes.in/LuxuryHomes/images/Gallery-9.png",
          "https://accuratewindchimes.in/LuxuryHomes/images/Gallery-6.png",
          "https://accuratewindchimes.in/LuxuryHomes/images/Gallery-5.png"
        ],
        "videoUrls": [
          "https://www.youtube.com/embed/M8SC0x90RIg",
          "https://www.youtube.com/embed/DxuD1NGXX-4"
        ],
        "otherDetails": {
          "possessionDate": "DEC-2022"
        }
      }
    ]
  }]
  ngOnInit(): void {
    console.log("a " + this.starCount)
    this.ratingArr = []
    for (let index = 0; index < this.starCount; index++) {

      this.ratingArr.push(index);
    }
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
  details(response: any) {
    const name = response.projectName
    this.route.navigateByUrl(`/details/${name}`);
  }

}
export enum StarRatingColor {
  primary = "primary",
  accent = "accent",
  warn = "warn"
}