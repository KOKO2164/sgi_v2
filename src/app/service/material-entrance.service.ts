import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MaterialEntrance } from '../models/material-entrance';

@Injectable({
  providedIn: 'root',
})
export class MaterialEntranceService {
  private backendURL: string = 'https://sowead.up.railway.app/material-entrances';
  constructor(private httpClient: HttpClient) {}

  findAllMaterialEntrances(): Observable<MaterialEntrance[]> {
    console.log('Fetching material entrances from backend');
    return this.httpClient.get<MaterialEntrance[]>(`${this.backendURL}`);
  }
}
