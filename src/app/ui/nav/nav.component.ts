import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterLink, RouterModule, Routes } from '@angular/router';
@Component({
  selector: 'app-nav',
  imports: [RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {


}


// import { HomeComponent } from './page/home.component';
// import { StatesComponent } from './states/states.component';
// // import { ContactComponent } from './contact/contact.component';

// const routes: Routes = [
//   { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
//   { path: 'home', component: HomeComponent },
//   { path: 'state', component: StatesComponent }, // Route for StatesComponent
//   { path: 'contact', component: ContactComponent },
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
