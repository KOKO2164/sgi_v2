import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MaterialDeparture } from '../models/material-departure';

@Injectable({
  providedIn: 'root',
})
export class MaterialDepartureService {
  private url: string = 'https://sowead.up.railway.app/material-departures';
  private get: string = this.url + '/';
  private add: string = this.url + '/save';
  private update: string = this.url + '/update/';
  private update_status: string = this.url + '/update-status/';

  constructor(private httpClient: HttpClient) {}

  findAllMaterialDepartures(): Observable<MaterialDeparture[]> {
    console.log('Fetching material departures from backend');
    return this.httpClient.get<MaterialDeparture[]>(`${this.url}`);
  }

  findMaterialDepartureById(materialDepartureId: number): Observable<MaterialDeparture> {
    console.log('Fetching material departure from backend');
    return this.httpClient.get<MaterialDeparture>(`${this.get}${materialDepartureId}`);
  }

  saveMaterialDeparture(materialDeparture: MaterialDeparture): Observable<MaterialDeparture> {
    console.log('Saving material departure to backend');
    return this.httpClient.post<MaterialDeparture>(`${this.add}`, materialDeparture);
  }

  updateMaterialDeparture(materialDeparture: MaterialDeparture, materialDepartureId: number): Observable<MaterialDeparture> {
    console.log('Updating material departure to backend');
    return this.httpClient.put<MaterialDeparture>(`${this.update}${materialDepartureId}`, materialDeparture);
  }

  updateMaterialDepartureStatus(materialDeparture: MaterialDeparture): Observable<MaterialDeparture> {
    console.log('Updating material departure status to backend');
    return this.httpClient.patch<MaterialDeparture>(`${this.update_status}${materialDeparture.materialDepartureId}`, materialDeparture);
  }
}
