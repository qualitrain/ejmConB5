import { Routes } from '@angular/router';
import { CajasQueCambianColorComponent } from './cajas-que-cambian-color/cajas-que-cambian-color.component';
import { SelecColorComponent } from './selec-color/selec-color.component';

export const routes: Routes = [
    { path: 'rutaA', component:CajasQueCambianColorComponent },
    { path: 'rutaB', component:SelecColorComponent }  
];
