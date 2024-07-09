import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StorageService } from '../../../../service/storage.service';
import { Storage } from '../../../../models/storage';


@Component({
  selector: 'app-form-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-create.component.html',
  styleUrl: './form-create.component.css'
})
export class FormCreateComponent {
  form: FormGroup;

  constructor(private storageService: StorageService) {
    this.form = new FormGroup({
      code: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      status: new FormControl(true)
    });
  }

  saveStorage():void{
    if(this.form.valid){
      const storage: Storage = this.form.value;
      this.storageService.saveStorage(storage).subscribe(() => {
        console.log('Storage saved successfully');
        window.location.pathname = '/almacen';
      });
    }else{
      console.error('Invalid form');
    }
  }
}
