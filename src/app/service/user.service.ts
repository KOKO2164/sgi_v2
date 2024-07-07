import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url: string = 'https://sowead.up.railway.app/users';
  private add: string = this.url + '/add';
  private update: string = this.url + '/update/';
  private update_status: string = this.url + '/update_status/';

  constructor(private httpClient: HttpClient) {}

  findAllUsers(): Observable<User[]> {
    console.log('Fetching users from backend');
    return this.httpClient.get<User[]>(`${this.url}`);
  }

  saveUser(user: User): Observable<User> {
    console.log('Saving user to backend');
    return this.httpClient.post<User>(`${this.add}`, user);
  }

  updateUser(user: User): Observable<User> {
    console.log('Updating user to backend');
    return this.httpClient.put<User>(`${this.update}${user.userId}`, user);
  }

  updateUserStatus(user: User): Observable<User> {
    console.log('Updating user status to backend');
    return this.httpClient.patch<User>(`${this.update_status}${user.userId}`, user);
  }
}
