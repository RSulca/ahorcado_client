import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JugarComponent } from './pages/jugar/jugar.component';
import { MantenimientoComponent } from './pages/mantenimiento/mantenimiento.component';


const routes: Routes = [
  { path: 'jugar', component: JugarComponent },
  { path: 'mantenimiento', component: MantenimientoComponent },
  { path: '', pathMatch: 'full', redirectTo: 'jugar' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
