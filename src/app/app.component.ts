import { Breakpoints, BreakpointObserver } from "@angular/cdk/layout";
import { Component, EventEmitter, Output } from "@angular/core";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { MatDialog } from "@angular/material/dialog";
import { LoginComponent } from "./components/login/login.component";
import { Router } from "@angular/router";
import { PropertyService } from "./services/property.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "findmyproperties";
  user = false;
  constructor(
    private propertyService: PropertyService,
    private breakpointObserver: BreakpointObserver,
    public dialog: MatDialog,
    private router: Router
  ) {
    propertyService.getIp();
    if (localStorage.getItem("user") == "true") {
      this.user = true;
    }
  }

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  openDialog() {
    const dialogRef = this.dialog.open(LoginComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
      if (localStorage.getItem("user") == "true") {
        this.user = true;
      }
    });
  }
  logout() {
    localStorage.clear();
    this.router.navigate(["/"]);
    this.user = false;
  }
  buy() {
    this.router.navigate(["/properties"]);
  }
}
