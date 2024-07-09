import { Component, OnInit } from '@angular/core';
import { MaterialDepartureService } from '../../../service/material-departure.service';
import { CommonModule } from '@angular/common';
import { MaterialDeparture } from '../../../models/material-departure';

@Component({
  selector: 'app-listar-salida-material',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listar-salida-material.component.html',
  styleUrl: './listar-salida-material.component.css',
})
export class ListarSalidaMaterialComponent implements OnInit {
  materialDepartures: MaterialDeparture[] = [];

  constructor(private materialDepartureService: MaterialDepartureService) {}

  ngOnInit(): void {
    this.materialDepartureService
      .findAllMaterialDepartures()
      .subscribe((materialDepartures) => {
        console.log(materialDepartures);
        this.materialDepartures = materialDepartures;
      });
  }

  create(): void {
    window.location.pathname = '/registrar-salida-de-material';
  }

  updateMaterialDeparture(materialDeparture: MaterialDeparture): void {
    window.location.pathname =
      '/editar-salida-de-material/' + materialDeparture.materialDepartureId;
  }
}
