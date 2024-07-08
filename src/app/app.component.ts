import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { CommonModule } from '@angular/common';
import { ListarUsuarioComponent } from './components/mantenimiento/listar-usuario/listar-usuario.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ListarEntradaMaterialComponent } from './components/mantenimiento/listar-entrada-material/listar-entrada-material.component';
import { ListarSalidaMaterialComponent } from './components/mantenimiento/listar-salida-material/listar-salida-material.component';
import { ListarMotivoComponent } from './components/mantenimiento/listar-motivo/listar-motivo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, SideNavComponent, InicioComponent, ListarUsuarioComponent, ListarMotivoComponent, ListarEntradaMaterialComponent, ListarSalidaMaterialComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sgi_v2';
  sideNavStatus: boolean = false;
}
