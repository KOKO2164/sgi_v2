import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MaterialExit } from '../models/material-exit';

@Injectable({
  providedIn: 'root'
})
export class MaterialExitService {
private backendURL: string = 'https://sowead.up.railway.app/material-exits';
  constructor(private httpClient: HttpClient) { }

  findAllMaterialExits(): Observable<MaterialExit[]> {
    console.log('Fetching material exits from backend');
    return this.httpClient.get<MaterialExit[]>(`${this.backendURL}`);
  }

}
