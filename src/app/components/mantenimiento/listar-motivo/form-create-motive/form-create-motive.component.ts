import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MotiveService } from '../../../../service/motive.service';
import { Motive } from '../../../../models/motive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-create-motive',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-create-motive.component.html',
  styleUrl: './form-create-motive.component.css'
})
export class FormCreateMotiveComponent{
  form: FormGroup;

  constructor(private motiveService: MotiveService) {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      category : new FormControl('', [Validators.required]),
      status: new FormControl(true)
    });
  }

  saveMotive(): void {
    if (this.form.valid) {
      const motive: Motive = this.form.value;
      this.motiveService.saveMotive(motive).subscribe(() => {
        console.log('Motive saved successfully');
        window.location.pathname = '/motivos';
      });
    }else {
      console.error('Invalid form');
    }
  }
}
