import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { BlogComponent } from './components/blog/blog.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCarouselModule } from '@ngbmodule/material-carousel';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PropertyListComponent } from './components/property-list/property-list.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { DetailsComponent } from './components/details/details.component';

import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import { RouterModule } from '@angular/router';
import { GalleryComponent } from './components/gallery/gallery.component';
import { SafePipeModule } from 'safe-pipe';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { PropertyService } from './services/property.service';
import { GalleryModelComponent } from './components/gallery-model/gallery-model.component';
import { VacancyComponent } from './components/vacancy/vacancy.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
    ContactComponent,
    BlogComponent,
    LoginComponent,
    PropertyListComponent,
    DetailsComponent,
    GalleryComponent,
    GalleryModelComponent,
    VacancyComponent,
  ],
  imports: [
    BrowserModule,
    MatSnackBarModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule ,
    MatDividerModule,
    LayoutModule,
    MatSlideToggleModule,
    MatTabsModule,
    RouterModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatDialogModule,
    HttpClientModule,
    MatCarouselModule.forRoot(),
    SafePipeModule,
    FormsModule,
    Ng2SearchPipeModule     
  ],
  providers: [PropertyService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
