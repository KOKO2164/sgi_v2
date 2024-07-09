import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarUsuarioComponent } from './components/mantenimiento/listar-usuario/listar-usuario.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ListarEntradaMaterialComponent } from './components/mantenimiento/listar-entrada-material/listar-entrada-material.component';
import { FormCreateComponent as FormCreateUserComponent } from './components/mantenimiento/listar-usuario/form-create/form-create.component';
import { FormUpdateComponent as FormUpdateUserComponent } from './components/mantenimiento/listar-usuario/form-update/form-update.component';
import { ListarSalidaMaterialComponent } from './components/mantenimiento/listar-salida-material/listar-salida-material.component';
import { FormCreateComponent as FormCreateSalidaComponent } from './components/mantenimiento/listar-salida-material/form-create/form-create.component';
import { FormUpdateComponent as FormUpdateSalidaComponent } from './components/mantenimiento/listar-salida-material/form-update/form-update.component';
import { ListarMotivoComponent } from './components/mantenimiento/listar-motivo/listar-motivo.component';
import { FormCreateMotiveComponent } from './components/mantenimiento/listar-motivo/form-create-motive/form-create-motive.component';
import { FormUpdateComponent as FormUpdateMotiveComponent } from './components/mantenimiento/listar-motivo/form-update/form-update.component';
import { FormCreateComponent as FormCreateEntradaComponent } from './components/mantenimiento/listar-entrada-material/form-create/form-create.component';
import { FormUpdateComponent as FormUpdateEntradaComponent } from './components/mantenimiento/listar-entrada-material/form-update/form-update.component';
import { ListarAlmacenComponent } from './components/mantenimiento/listar-almacen/listar-almacen.component';
import { FormCreateComponent as FormCreateAlmacenComponent } from './components/mantenimiento/listar-almacen/form-create/form-create.component';
import { FormUpdateComponent as FormUpdateAlmacenComponent } from './components/mantenimiento/listar-almacen/form-update/form-update.component';

const routes: Routes = [
  { path: '', component: InicioComponent},
  { path: 'usuarios', component: ListarUsuarioComponent },
  { path: 'crear-usuario', component: FormCreateUserComponent },
  { path: 'editar-usuario/:id', component: FormUpdateUserComponent },

  { path: 'motivos', component: ListarMotivoComponent},
  { path: 'crear-motivo', component: FormCreateMotiveComponent },
  { path: 'editar-motivo/:id', component: FormUpdateMotiveComponent},

  { path: 'entradas-materiales', component: ListarEntradaMaterialComponent },
  { path: 'registrar-entrada-de-material', component: FormCreateEntradaComponent },
  { path: 'editar-entrada-de-material/:id', component: FormUpdateEntradaComponent },

  { path: 'salidas-materiales', component: ListarSalidaMaterialComponent },
  { path: 'registrar-salida-de-material', component: FormCreateSalidaComponent },
  { path: 'editar-salida-de-material/:id', component: FormUpdateSalidaComponent },

  { path: 'almacen', component: ListarAlmacenComponent },
  { path: 'crear-almacen', component: FormCreateAlmacenComponent },
  { path: 'editar-almacen/:id', component: FormUpdateAlmacenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
