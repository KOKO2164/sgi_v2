import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from '../../../../service/user.service';
import { User } from '../../../../models/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-update',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-update.component.html',
  styleUrl: './form-update.component.css',
})
export class FormUpdateComponent implements OnInit {
  form: FormGroup;
  user: User = { userId: 0, name: '', status: false };

  constructor(private userService: UserService, private route: ActivatedRoute) {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.user.userId = +id;
      this.userService.findUserById(this.user.userId).subscribe((user) => {
        if (user) {
          this.user = user;
          this.form.patchValue({ name: user.name });
        } else {
          console.error('User not found');
        }
      });
    } else {
      console.error('No userId provided');
    }
  }

  updateUser(): void {
    if (this.form.valid) {
      const user: User = this.form.value;
      const userId = this.user.userId;
      this.userService.updateUser(user, userId).subscribe(() => {
        console.log('User updated successfully');
        window.location.pathname = '/usuarios';
      });
    } else {
      console.error('Invalid form');
    }
  }
}
