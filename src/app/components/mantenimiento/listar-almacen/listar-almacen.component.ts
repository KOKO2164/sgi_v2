import { Component, OnInit } from '@angular/core';
import { Storage } from '../../../models/storage';
import { StorageService } from '../../../service/storage.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar-almacen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listar-almacen.component.html',
  styleUrl: './listar-almacen.component.css'
})
export class ListarAlmacenComponent implements OnInit{
  storages: Storage[] = [];

  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
    this.storageService.findAllStorages().subscribe({
      next: (storages) => {
        this.storages = storages;
      },
      error: (err) => {
        console.error('Error fetching storages:', err);
      }
    });
  }
}
