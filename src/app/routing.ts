import{RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './globals/pages/home/home.component';
import { CategoriaComponent } from './globals/pages/categoria/categoria.component';

const routerM:Routes = [
    {path:'', component:HomeComponent},
    {path:'categoria', component:CategoriaComponent}// path vacio para apuntar a home
];
export const appRouter = RouterModule.forRoot(routerM);

