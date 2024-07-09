import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MaterialDeparture } from '../../../../models/material-departure';
import { MaterialDepartureService } from '../../../../service/material-departure.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../../service/user.service';
import { MotiveService } from '../../../../service/motive.service';
import { StorageService } from '../../../../service/storage.service';
import { User } from '../../../../models/user';
import { Motive } from '../../../../models/motive';
import { Storage } from '../../../../models/storage';

@Component({
  selector: 'app-form-update',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-update.component.html',
  styleUrl: './form-update.component.css',
})
export class FormUpdateComponent implements OnInit {
  form: FormGroup;
  materialDeparture: MaterialDeparture = {
    materialDepartureId: 0,
    description: '',
    quantity: 0,
    price: 0,
    user: { userId: 0, name: '', status: false },
    motive: { motiveId: 0, name: '', category: '', status: false },
    storage: {
      storageId: 0,
      code: '',
      name: '',
      description: '',
      status: false,
    },
    status: false,
  };
  users: User[] = [];
  motives: Motive[] = [];
  storages: Storage[] = [];
  user: User = { userId: 0, name: '', status: false };
  motive: Motive = { motiveId: 0, name: '', category: '', status: false };
  storage: Storage = {
    storageId: 0,
    code: '',
    name: '',
    description: '',
    status: false,
  };

  constructor(
    private materialDepartureService: MaterialDepartureService,
    private userService: UserService,
    private motiveService: MotiveService,
    private storageService: StorageService,
    private route: ActivatedRoute
  ) {
    this.form = new FormGroup({
      description: new FormControl('', [Validators.required]),
      quantity: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      user: new FormControl('', [Validators.required]),
      motive: new FormControl('', [Validators.required]),
      storage: new FormControl('', [Validators.required]),
      status: new FormControl(true),
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];

    this.userService.findUserByActiveStatus().subscribe((users) => {
      this.users = users;
    });

    this.motiveService.findMotiveByActiveStatus().subscribe((motives) => {
      this.motives = motives;
    });

    this.storageService.findStorageByActiveStatus().subscribe((storages) => {
      this.storages = storages;
    });
    if (id) {
      this.materialDeparture.materialDepartureId = +id;
      this.materialDepartureService
        .findMaterialDepartureById(this.materialDeparture.materialDepartureId)
        .subscribe((materialDeparture) => {
          if (materialDeparture) {
            this.materialDeparture = materialDeparture;

            const selectedUser = this.users.find(
              (user) => user.userId === materialDeparture.user.userId
            );
            const selectedMotive = this.motives.find(
              (motive) => motive.motiveId === materialDeparture.motive.motiveId
            );
            const selectedStorage = this.storages.find(
              (storage) =>
                storage.storageId === materialDeparture.storage.storageId
            );
            if (selectedUser) {
              this.user = selectedUser;
            } else {
              console.error('Selected user not found');
            }
            if (selectedMotive) {
              this.motive = selectedMotive;
            } else {
              console.error('Selected motive not found');
            }
            if (selectedStorage) {
              this.storage = selectedStorage;
            } else {
              console.error('Selected storage not found');
            }
            this.form.patchValue({
              description: materialDeparture.description,
              quantity: materialDeparture.quantity,
              price: materialDeparture.price,
              status: materialDeparture.status,
              user: selectedUser
                ? selectedUser.userId
                : materialDeparture.user.userId,
              motive: selectedMotive
                ? selectedMotive.motiveId
                : materialDeparture.motive.motiveId,
              storage: selectedStorage
                ? selectedStorage.storageId
                : materialDeparture.storage.storageId,
            });
          } else {
            console.error('MaterialDeparture not found');
          }
        });
    } else {
      console.error('No materialDepartureId provided');
    }
  }

  obtainUser(): void {
    this.userService.findUserById(this.form.value.user).subscribe((user) => {
      this.user = user;
    });
  }

  obtainMotive(): void {
    this.motiveService
      .findMotiveById(this.form.value.motive)
      .subscribe((motive) => {
        this.motive = motive;
      });
  }

  obtainStorage(): void {
    this.storageService
      .findStorageById(this.form.value.storage)
      .subscribe((storage) => {
        this.storage = storage;
      });
  }

  updateMaterialDeparture(): void {
    if (this.form.valid) {
      const materialDeparture: MaterialDeparture = {
        ...this.form.value,
        user: this.user,
        motive: this.motive,
        storage: this.storage,
      };
      console.log(materialDeparture);
      const materialDepartureId = this.materialDeparture.materialDepartureId;
      this.materialDepartureService
        .updateMaterialDeparture(materialDeparture, materialDepartureId)
        .subscribe(() => {
          console.log('MaterialDeparture updated successfully');
          window.location.pathname = '/salidas-materiales';
        });
    } else {
      console.error('Invalid form');
    }
  }
}
