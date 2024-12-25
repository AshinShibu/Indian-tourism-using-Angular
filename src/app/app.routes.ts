import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { StateComponent } from './page/state/state.component';
import { ContacComponent } from './page/contac/contac.component';
import { NotfoundComponent } from './page/notfound/notfound.component';
import { SinglestateComponent } from './singlestate/singlestate.component';

export const routes: Routes = [
    {
        path:'',component:HomeComponent
    },
    {
        
            path:'states',component:StateComponent
        

    },
    {
        path:'contact',component:ContacComponent
    },
    {path:'states/:id',component:SinglestateComponent},
    {path:'**',component:NotfoundComponent}
   
];
