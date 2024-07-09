import { Component, OnInit } from '@angular/core';
import { MaterialEntrance } from '../../../../models/material-entrance';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../../../models/user';
import { Motive } from '../../../../models/motive';
import { Storage } from '../../../../models/storage';
import { MaterialEntranceService } from '../../../../service/material-entrance.service';
import { UserService } from '../../../../service/user.service';
import { MotiveService } from '../../../../service/motive.service';
import { StorageService } from '../../../../service/storage.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-update',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-update.component.html',
  styleUrl: './form-update.component.css'
})
export class FormUpdateComponent implements OnInit{
  form: FormGroup;
  materialEntrance: MaterialEntrance = {
    materialEntranceId: 0,
    description: '',
    quantity: 0,
    price: '',
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
    private materialEntranceService: MaterialEntranceService,
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
      this.materialEntrance.materialEntranceId = +id;
      this.materialEntranceService
        .findMaterialEntranceById(this.materialEntrance.materialEntranceId)
        .subscribe((materialEntrance) => {
          if (materialEntrance) {
            this.materialEntrance = materialEntrance;

            const selectedUser = this.users.find(
              (user) => user.userId === materialEntrance.user.userId
            );
            const selectedMotive = this.motives.find(
              (motive) => motive.motiveId === materialEntrance.motive.motiveId
            );
            const selectedStorage = this.storages.find(
              (storage) =>
                storage.storageId === materialEntrance.storage.storageId
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
              description: materialEntrance.description,
              quantity: materialEntrance.quantity,
              price: materialEntrance.price,
              status: materialEntrance.status,
              user: selectedUser
                ? selectedUser.userId
                : materialEntrance.user.userId,
              motive: selectedMotive
                ? selectedMotive.motiveId
                : materialEntrance.motive.motiveId,
              storage: selectedStorage
                ? selectedStorage.storageId
                : materialEntrance.storage.storageId,
            });
          } else {
            console.error('MaterialEntrance not found');
          }
        });
    } else {
      console.error('No materialEntranceId provided');
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

  updateMaterialEntrance(): void {
    if (this.form.valid) {
      const materialEntrance: MaterialEntrance = {
        ...this.form.value,
        user: this.user,
        motive: this.motive,
        storage: this.storage,
      };
      console.log(materialEntrance);
      const materialEntranceId = this.materialEntrance.materialEntranceId;
      this.materialEntranceService
        .updateMaterialEntrance(materialEntrance, materialEntranceId)
        .subscribe(() => {
          console.log('MaterialEntrance updated successfully');
          window.location.pathname = '/salidas-materiales';
        });
    } else {
      console.error('Invalid form');
    }
  }
}
