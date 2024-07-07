import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private backendURL: string = 'https://sowead.up.railway.app/users';
  constructor(private httpClient: HttpClient) {}

  findAllUsers(): Observable<User[]> {
    console.log('Fetching users from backend');
    return this.httpClient.get<User[]>(`${this.backendURL}`);
  }
}
