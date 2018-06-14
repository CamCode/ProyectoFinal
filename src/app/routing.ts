import{RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './globals/pages/home/home.component';

const routerM:Routes = [
    {path:'', component:HomeComponent}// path vacio para apuntar a home
];
export const appRouter = RouterModule.forRoot(routerM);

