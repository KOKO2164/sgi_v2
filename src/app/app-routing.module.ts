import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarUsuarioComponent } from './components/mantenimiento/listar-usuario/listar-usuario.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ListarEntradaMaterialComponent } from './components/mantenimiento/listar-entrada-material/listar-entrada-material.component';
import { FormCreateComponent } from './components/mantenimiento/listar-usuario/form-create/form-create.component';
import { ListarSalidaMaterialComponent } from './components/mantenimiento/listar-salida-material/listar-salida-material.component';
import { ListarMotivoComponent } from './components/mantenimiento/listar-motivo/listar-motivo.component';

const routes: Routes = [
  { path: '', component: InicioComponent},
  { path: 'usuarios', component: ListarUsuarioComponent },
  { path: 'crear-usuario', component: FormCreateComponent },
  { path: 'motivos', component: ListarMotivoComponent},
  { path: 'entradas-materiales', component: ListarEntradaMaterialComponent },
  { path: 'salidas-materiales', component: ListarSalidaMaterialComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
