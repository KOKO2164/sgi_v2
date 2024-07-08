import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Storage } from '../models/storage';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private url: string = 'https://sowead.up.railway.app/storages';
  private get: string = this.url + '/';
  private add: string = this.url + '/save';
  private update: string = this.url + '/update/';
  private update_status: string = this.url + '/update-status/';

  constructor(private httpClient: HttpClient) {}

  findAllStorages(): Observable<Storage[]> {
    console.log('Fetching storages from backend');
    return this.httpClient.get<Storage[]>(`${this.url}`);
  }

  findStorageById(storageId: number): Observable<Storage> {
    console.log('Fetching storage from backend');
    return this.httpClient.get<Storage>(`${this.get}${storageId}`);
  }

  saveStorage(storage: Storage): Observable<Storage> {
    console.log('Saving storage to backend');
    return this.httpClient.post<Storage>(`${this.add}`, storage);
  }

  updateStorage(storage: Storage, storageId: number): Observable<Storage> {
    console.log('Updating storage to backend');
    return this.httpClient.put<Storage>(`${this.update}${storageId}`, storage);
  }

  updateStorageStatus(storage: Storage): Observable<Storage> {
    console.log('Updating storage status to backend');
    return this.httpClient.patch<Storage>(`${this.update_status}${storage.storageId}`, storage);
  }
}
