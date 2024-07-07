import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../../service/user.service';
import { User } from '../../../../models/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-create',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-create.component.html',
  styleUrl: './form-create.component.css'
})
export class FormCreateComponent {
  form: FormGroup;
  
  constructor(private userService: UserService) {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
    });
  }

  saveUser(): void {
    if (this.form.valid) {
      const user: User = this.form.value;
      this.userService.saveUser(user).subscribe(() => {
        console.log('User saved successfully');
        window.location.pathname = '/usuarios';
      });
    } else {
      console.error('Invalid form');
    }
  }
}
