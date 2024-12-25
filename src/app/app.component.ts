import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./ui/nav/nav.component";
import { HomeComponent } from "./page/home/home.component";
import { StateComponent } from "./page/state/state.component";
import { ContacComponent } from "./page/contac/contac.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tourism';
  

}
