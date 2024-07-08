import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarUsuarioComponent } from './components/mantenimiento/listar-usuario/listar-usuario.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ListarEntradaMaterialComponent } from './components/mantenimiento/listar-entrada-material/listar-entrada-material.component';
import { FormCreateComponent } from './components/mantenimiento/listar-usuario/form-create/form-create.component';
import { FormUpdateComponent } from './components/mantenimiento/listar-usuario/form-update/form-update.component';
import { ListarSalidaMaterialComponent } from './components/mantenimiento/listar-salida-material/listar-salida-material.component';
import { ListarMotivoComponent } from './components/mantenimiento/listar-motivo/listar-motivo.component';
import { FormCreateMotiveComponent } from './components/mantenimiento/listar-motivo/form-create-motive/form-create-motive.component';
import { ListarAlmacenComponent } from './components/mantenimiento/listar-almacen/listar-almacen.component';

const routes: Routes = [
  { path: '', component: InicioComponent},
  { path: 'usuarios', component: ListarUsuarioComponent },
  { path: 'crear-usuario', component: FormCreateComponent },
  { path: 'motivos', component: ListarMotivoComponent},
  { path: 'crear-motivo', component: FormCreateMotiveComponent },
  { path: 'entradas-materiales', component: ListarEntradaMaterialComponent },
  { path: 'salidas-materiales', component: ListarSalidaMaterialComponent },
  { path: 'almacen', component: ListarAlmacenComponent },
  { path: 'editar-usuario/:id', component: FormUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
