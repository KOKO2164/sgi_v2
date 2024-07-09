import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MaterialDepartureService } from '../../../../service/material-departure.service';
import { User } from '../../../../models/user';
import { UserService } from '../../../../service/user.service';
import { StorageService } from '../../../../service/storage.service';
import { Storage } from '../../../../models/storage';
import { Motive } from '../../../../models/motive';
import { MotiveService } from '../../../../service/motive.service';
import { MaterialDeparture } from '../../../../models/material-departure';

@Component({
  selector: 'app-form-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-create.component.html',
  styleUrl: './form-create.component.css',
})
export class FormCreateComponent implements OnInit {
  form: FormGroup;
  users: User[] = [];
  motives: Motive[] = [];
  storages: Storage[] = [];
  user: User = { userId: 0, name: '', status: false};
  motive: Motive = { motiveId: 0, name: '', category: '', status: false};
  storage: Storage = { storageId: 0, code: '', name: '', description: '', status: false};

  constructor(
    private materialDepartureService: MaterialDepartureService,
    private userService: UserService,
    private motiveService: MotiveService,
    private storageService: StorageService
  ) {
    this.form = new FormGroup({
      description: new FormControl('', [Validators.required]),
      quantity: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      user: new FormControl('', [Validators.required]),
      motive: new FormControl('', [Validators.required]),
      storage: new FormControl('', [Validators.required]),
      status: new FormControl(true)
    });
  }

  ngOnInit(): void {
    this.userService.findUserByActiveStatus().subscribe((users) => {
      this.users = users;
    });
    this.motiveService.findMotiveByActiveStatus().subscribe((motives) => {
      this.motives = motives;
    });
    this.storageService.findStorageByActiveStatus().subscribe((storages) => {
      this.storages = storages;
    });
  }

  obtainUser(): void {
    this.userService.findUserById(this.form.value.user).subscribe((user) => {
      this.user = user;
    });
  }

  obtainMotive(): void {
    this.motiveService.findMotiveById(this.form.value.motive).subscribe((motive) => {
      this.motive = motive;
    });
  }

  obtainStorage(): void {
    this.storageService.findStorageById(this.form.value.storage).subscribe((storage) => {
      this.storage = storage;
    });
  }

  saveMaterialDeparture(): void {
    if (this.form.valid) {
      const materialDeparture: MaterialDeparture = {
        ...this.form.value,
        user: this.user,
        motive: this.motive,
        storage: this.storage,
      };
      console.log(materialDeparture);
      this.materialDepartureService
        .saveMaterialDeparture(materialDeparture)
        .subscribe(() => {
          console.log('Material departure saved successfully');
          window.location.pathname = '/salidas-materiales';
        });
    } else {
      console.error('Invalid form');
    }
  }
}
