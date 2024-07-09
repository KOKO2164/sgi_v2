import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from '../../../../service/storage.service';
import { Storage } from '../../../../models/storage';

@Component({
  selector: 'app-form-update',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-update.component.html',
  styleUrl: './form-update.component.css'
})
export class FormUpdateComponent implements OnInit {
  form: FormGroup;
  storage: Storage = { storageId: 0, code: '',name: '', description: '', status: false };

  constructor(private storageService: StorageService, private route: ActivatedRoute) {
    this.form = new FormGroup({
      code: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      status: new FormControl(true),
    });
  }

  ngOnInit(): void {
  const id = this.route.snapshot.params['id'];
  if (id) {
    this.storage.storageId = +id;
    this.storageService.findStorageById(this.storage.storageId).subscribe((storage) => {
      if (storage) {
        this.storage = storage;
        this.form.patchValue({
          code: storage.code,
          name: storage.name,
          status: storage.status
        });
      } else {
        console.error('Storage not found');
      }
      });
    } else{
      console.error('No storageId provided');
    }
  }

  updateStorage(): void {
    if (this.form.valid) {
      const storage: Storage = this.form.value;
      const storageId = this.storage.storageId;
      this.storageService.updateStorage(storage, storageId).subscribe(() => {
        console.log('Storage updated successfully');
        window.location.pathname = '/almacen';
      });
    } else {
      console.error('Invalid form');
    }
  }

}
