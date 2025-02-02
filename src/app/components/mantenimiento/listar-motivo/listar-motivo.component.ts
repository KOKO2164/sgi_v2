import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Motive } from '../../../models/motive';
import { MotiveService } from '../../../service/motive.service';

@Component({
  selector: 'app-listar-motivo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listar-motivo.component.html',
  styleUrl: './listar-motivo.component.css'
})
export class ListarMotivoComponent implements OnInit{
  motives: Motive[] = [];

  constructor(private motiveService: MotiveService) {}

  ngOnInit(): void {
    this.motiveService.findAllMotives().subscribe((motives) => {
      this.motives = motives;
    });
  }

  createMotive (): void {
    window.location.pathname = '/crear-motivo';
  }

  updateMotive(motive: Motive): void {
    window.location.pathname = '/editar-motivo/' + motive.motiveId;
  }

  updateMotiveStatus(motive: Motive): void {
    this.motiveService.updateMotiveStatus(motive).subscribe(() => {
      console.log('Motive status updated successfully');
      window.location.pathname = '/motivos';
    });
  }

}
