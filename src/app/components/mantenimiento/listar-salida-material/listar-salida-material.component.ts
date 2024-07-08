import { Component, OnInit } from '@angular/core';
import { MaterialExitService } from '../../../service/material-exit.service';
import { CommonModule } from '@angular/common';
import { MaterialExit } from '../../../models/material-exit';

@Component({
  selector: 'app-listar-salida-material',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listar-salida-material.component.html',
  styleUrl: './listar-salida-material.component.css'
})
export class ListarSalidaMaterialComponent implements OnInit{

  materialExits: MaterialExit[] = [];

  constructor(private materialExitService: MaterialExitService){}

  ngOnInit(): void {
    this.materialExitService.findAllMaterialExits().subscribe((materialExits) => {
      this.materialExits = materialExits;
    });
  }

}
