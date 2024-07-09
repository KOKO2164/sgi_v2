import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Motive } from '../../../../models/motive';
import { MotiveService } from '../../../../service/motive.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-update',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-update.component.html',
  styleUrl: './form-update.component.css'
})

export class FormUpdateComponent implements OnInit{
  form: FormGroup;
  motive: Motive = { motiveId: 0, name: '', category:'', status: false };

  constructor(private motiveService: MotiveService, private route: ActivatedRoute) {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      status: new FormControl(true),
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.motive.motiveId = +id;
      this.motiveService.findMotiveById(this.motive.motiveId).subscribe((motive) => {
        if (motive) {
          this.motive = motive;
          this.form.patchValue({
            name: motive.name,
            category: motive.category});
        } else {
          console.error('Motive not found');
        }
      });
    } else {
      console.error('No motiveId provided');
    }
  }

  updateMotive(): void {
    if (this.form.valid) {
      const motive: Motive = this.form.value;
      const motiveId = this.motive.motiveId;
      this.motiveService.updateMotive(motive, motiveId).subscribe(() => {
        console.log('Motive updated successfully');
        window.location.pathname = '/motivos';
      });
    } else {
      console.error('Invalid form');
    }
  }
}
