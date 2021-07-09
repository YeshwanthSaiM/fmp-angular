import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Component, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {MatDialog} from '@angular/material/dialog';
import { LoginComponent } from './components/login/login.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'findmyproperties';
  @Output() SideNavToggle = new EventEmitter();
  @Output() closeSideNav = new EventEmitter();

  constructor(private breakpointObserver: BreakpointObserver,public dialog: MatDialog) { }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  openSidenav() {
    this.SideNavToggle.emit();
  }

  onToggleClose() {
    alert()
    this.closeSideNav.emit();
  }

  
  openDialog() {
    this.closeSideNav.emit();
    const dialogRef = this.dialog.open(LoginComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
