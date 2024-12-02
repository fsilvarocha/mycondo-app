import { Routes } from '@angular/router';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { BlocosComponent } from './cadastros/blocos/blocos.component';
import { MoradoresComponent } from './cadastros/moradores/moradores.component';
import { ApartamentosComponent } from './cadastros/apartamentos/apartamentos.component';
import { CondominioComponent } from './cadastros/condominios/pagina/condominio/condominio.component';

export const routes: Routes = [
    {
        path:"", component:DashboardComponent, children:[
            {path:"cadastros/condominios", component:CondominioComponent},
            {path:"cadastros/blocos", component:BlocosComponent},
            {path:"cadastros/apartamentos", component:ApartamentosComponent},
            {path:"cadastros/moradores", component:MoradoresComponent},                        
        ]
    }
];
