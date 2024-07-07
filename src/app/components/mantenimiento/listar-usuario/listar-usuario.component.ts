import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-listar-usuario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listar-usuario.component.html',
  styleUrl: './listar-usuario.component.css',
})
export class ListarUsuarioComponent implements OnInit{
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.findAllUsers().subscribe((users) => {
      this.users = users;
    });
  }
}
