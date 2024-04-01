import { Routes } from '@angular/router';
import { CajasQueCambianColorComponent } from './cajas-que-cambian-color/cajas-que-cambian-color.component';
import { SelecColorComponent } from './selec-color/selec-color.component';
import { PagNoExisteComponent } from './demo-ruteo/pag-no-existe/pag-no-existe.component';
import { CajaVaciaComponent } from './demo-ruteo/caja-vacia/caja-vacia.component';

export const routes: Routes = [
    { path: 'rutaA', component:CajasQueCambianColorComponent },
    { path: 'rutaB', component:SelecColorComponent },
    { path: '', component: CajaVaciaComponent},
    { path: '**', component:PagNoExisteComponent }
];
