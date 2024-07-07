import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private backendURL: string = 'https://sowead.up.railway.app/storages';
  constructor(private httpClient: HttpClient) {}

  findAllStorages(): Observable<Storage[]> {
    console.log('Fetching storages from backend');
    return this.httpClient.get<Storage[]>(`${this.backendURL}`);
  }
}
