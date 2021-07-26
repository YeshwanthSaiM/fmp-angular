import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { PropertyListComponent } from './components/property-list/property-list.component';
import { DetailsComponent } from './components/details/details.component'
import { GalleryComponent } from './components/gallery/gallery.component';
import { GalleryModelComponent } from './components/gallery-model/gallery-model.component';
import { VacancyComponent } from './components/vacancy/vacancy.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'properties', component: PropertyListComponent },
  { path: 'details/:projectName', component: DetailsComponent },
  { path: 'gallery/:projectName', component: GalleryComponent },
  { path: 'gallery-model/:projectName', component: GalleryModelComponent },
  { path: 'vacancy', component: VacancyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
