import { Routes } from '@angular/router';
import { CajasQueCambianColorComponent } from './cajas-que-cambian-color/cajas-que-cambian-color.component';
import { SelecColorComponent } from './selec-color/selec-color.component';
import { PagNoExisteComponent } from './demo-ruteo/pag-no-existe/pag-no-existe.component';
import { CajaVaciaComponent } from './demo-ruteo/caja-vacia/caja-vacia.component';
import { CajaSubMenuComponent } from './demo-ruteo/caja-sub-menu/caja-sub-menu.component';
import { TestRxjs01Component } from './demo-rxjs/test-rxjs01/test-rxjs01.component';
import { TestRxjs02Component } from './demo-rxjs/test-rxjs02/test-rxjs02.component';
import { TestRxjs03Component } from './demo-rxjs/test-rxjs03/test-rxjs03.component';

export const routes: Routes = [
    { path: 'rutaA', component:CajasQueCambianColorComponent },
    { path: 'rutaB', component:SelecColorComponent },
    { 
        path: 'submenuRxJs', 
        component:CajaSubMenuComponent,
        children:[
            { path:'', component:CajaVaciaComponent},
            { path:'suscripcion', component:TestRxjs01Component },
            { path:'adaptadores', component:TestRxjs02Component },
            { path:'inv_asincrona', component:TestRxjs03Component },
            { path: '**', component:PagNoExisteComponent }
        ]
    },
    { path: '', component: CajaVaciaComponent},
    { path: '**', component:PagNoExisteComponent }
];
