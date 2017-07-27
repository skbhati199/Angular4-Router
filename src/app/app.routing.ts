import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import {UserComponentComponent} from './user-component/user-component.component';
const APP_ROUTES : Routes = [
    {path : '', component:HomeComponent},
    {path : 'user', component:UserComponentComponent}
];

export const AppRouting = RouterModule.forRoot(APP_ROUTES);


