import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  projects: any;
  project: any;

  projectNames: any[] = [
    "Bloom City 2",
    "Rhomes",
    "DazzlerCity",
    "Green West",
    "True Gold Hills",
    "Marvel City Phase 1",
    "Marvel City Phase 2",
    "APARNA ONE",
    "Sunray Township",
    "N Square Oxigen",
    "Accurate Wind Chimes",
    "APR PRAVEENS LUXURIA",
    "ASHOKA TOWNSHIP",
    "Ashoo Towers",
    "Big Homes",
    "Blueprint Projects",
    "Elemental Earthwoods",
    "G SQUARE",
    "GALAXY TOWERS",
    "GOLDEN COUNTY",
    "GOWRA FOUNTAINHEAD",
    "GREENVIEW APARTMENTS",
    "Hallmark Silvanus",
    "HALLMARK VICINIA",
    "JADE PARK",
    "KAMALA CASTLE",
    "NAVYA PRESTIAGE",
    "NAVYA SAROVAR",
    "NAVYA THE GRAND",
    "ONEWEST",
    "PRASIDDH NIVAS",
    "RELIANCE JUBILEE",
    "Sanman Trinity Villas",
    "SUNSHINE LA GRAND",
    "THE HUDDLE",
    "TULASI GARDENS",
    "VASAVI COOPERATE",
    "VASAVI SRI NILAYAM",
    "Vertex Premio",
    "ALIENS HUB",
    "HILLCREST",
    "Jubilee Temple Tree",
    "magic breeze",
    "Manbhum Around the Grove",
    "Mount Bay",
    "MS VESSELLA MEADOWS",
    "MY HOME KRISHE",
    "MYSCAPEISLE OF SKY",
    "R V Askhobya",
    "R V SOMWRITA",
    "Sensation Fortune Bhoomika Mall and multiplex",
    "SILVER OAK VILLAS",
    "SMR SMs VINAY CASA CARINO",
    "SOLITAIRE HEIGHTS",
    "TULASI LAKE FRONT",
    "VESSELLA WOODS",
    "Nilaya Aravalli",
    "NIHARIKA LANDMARK"
  ];

  private endpoint = "assets/projects"

  constructor(private http: HttpClient) { }

  count: number = 0;
  getByName<T>(name: string): Observable<T> {
    const url = `../../assets/projects/${name}.json`;
    return this.http.get<T>(url);
  }
  getUserCount() {
    return this.http.get('https://fmpapi.herokuapp.com/user/count')
  }
  getIp() {
    this.http.get<any>('https://geolocation-db.com/json/').subscribe(res => {

      new Promise((resolve, reject) => {

        navigator.geolocation.getCurrentPosition(resp => {
          console.log({ lng: resp.coords.longitude, lat: resp.coords.latitude })
          return this.http.post("https://fmpapi.herokuapp.com/user/location", {
            ip: res.IPv4, "location": {
              "lat": resp.coords.latitude,
              "long": resp.coords.longitude
            }
          }).subscribe(resp => {
            console.log(resp)
          })
          resolve({ lng: resp.coords.longitude, lat: resp.coords.latitude });
        },
          err => {
            reject(err);
          });
      });
    })
  }
  getAll(): Observable<any> {
    return Observable.create((observer: Observer<any>) => {
      this.count = 0;
      const self = this;
      const name = this.projectNames[self.count]
      self.count = self.count + 1

      const nextName = this.projectNames[this.count]
      self.getByName(name).subscribe(res => onNext(res), observer.error);

      function onNext(response: any) {
        observer.next(response);
        if (self.count < self.projectNames.length) {
          const name = self.projectNames[self.count]
          self.count = self.count + 1;
          self.getByName(name).subscribe(res => onNext(res), observer.error);
        } else {
          observer.complete();
        }
      }
    });
  }

  saveCustomerDetails(data: any) {
    
    
    this.http.get<any>('https://geolocation-db.com/json/').subscribe(res => {
      //  new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resp => {
          data.ip = res.IPv4
          data.location = {
            "lat": resp.coords.latitude,
            "long": resp.coords.longitude
          }
          console.log(data)

        },
          err => {
            // reject(err);
          });
      // });
    })
    return this.http.post('https://fmpapi.herokuapp.com/user/count', data)
  }
}
