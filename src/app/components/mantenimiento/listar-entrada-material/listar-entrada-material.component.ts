import { Component, OnInit } from '@angular/core';
import { MaterialEntrance } from '../../../models/material-entrance';
import { MaterialEntranceService } from '../../../service/material-entrance.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar-entrada-material',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listar-entrada-material.component.html',
  styleUrl: './listar-entrada-material.component.css'
})
export class ListarEntradaMaterialComponent implements OnInit{
  materialEntrances: MaterialEntrance[] = [];

  constructor(private materialEntranceService: MaterialEntranceService) {}

  ngOnInit(): void {
    this.materialEntranceService.findAllMaterialEntrances().subscribe((materialEntrances) => {
      this.materialEntrances = materialEntrances;
    });
  }

  create(): void {
    window.location.pathname = '/registrar-entrada-de-material';
  }

  updateMaterialEntrance(materialEntrance: MaterialEntrance): void {
    window.location.pathname =
      '/editar-entrada-de-material/' + materialEntrance.materialEntranceId;
  }
}
