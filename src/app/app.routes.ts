import {  RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { MenuComponent } from './pages//menu/menu.component';
import { AboutComponent } from './pages/about/about.component';
import { provideRouter, RouterOutlet } from '@angular/router';
import { MinimalMenuListComponent } from './pages/minimal-menu-list/minimal-menu-list.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'menu', component: MenuComponent }, 
  { path: 'about', component: AboutComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'list', component: MinimalMenuListComponent }
  

]

