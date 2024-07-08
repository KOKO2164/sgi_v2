import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MaterialEntrance } from '../models/material-entrance';

@Injectable({
  providedIn: 'root',
})
export class MaterialEntranceService {
  private url: string = 'https://sowead.up.railway.app/material-entrances';
  private get: string = this.url + '/';
  private add: string = this.url + '/save';
  private update: string = this.url + '/update/';
  private update_status: string = this.url + '/update-status/';

  constructor(private httpClient: HttpClient) {}

  findAllMaterialEntrances(): Observable<MaterialEntrance[]> {
    console.log('Fetching material entrances from backend');
    return this.httpClient.get<MaterialEntrance[]>(`${this.url}`);
  }

  findMaterialEntranceById(materialEntranceId: number): Observable<MaterialEntrance> {
    console.log('Fetching material entrance from backend');
    return this.httpClient.get<MaterialEntrance>(`${this.get}${materialEntranceId}`);
  }

  saveMaterialEntrance(materialEntrance: MaterialEntrance): Observable<MaterialEntrance> {
    console.log('Saving material entrance to backend');
    return this.httpClient.post<MaterialEntrance>(`${this.add}`, materialEntrance);
  }

  updateMaterialEntrance(materialEntrance: MaterialEntrance, materialEntranceId: number): Observable<MaterialEntrance> {
    console.log('Updating material entrance to backend');
    return this.httpClient.put<MaterialEntrance>(`${this.update}${materialEntranceId}`, materialEntrance);
  }

  updateMaterialEntranceStatus(materialEntrance: MaterialEntrance): Observable<MaterialEntrance> {
    console.log('Updating material entrance status to backend');
    return this.httpClient.patch<MaterialEntrance>(`${this.update_status}${materialEntrance.materialEntranceId}`, materialEntrance);
  }
}
