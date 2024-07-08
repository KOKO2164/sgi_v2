import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Motive } from '../models/motive';

@Injectable({
  providedIn: 'root'
})
export class MotivoService {

  private url: string = "https://sowead.up.railway.app/motives";
  private get: string = this.url + '/';
  private add: string = this.url + '/save';
  private update: string = this.url + '/update/';
  private update_status: string = this.url + '/update-status/';

  constructor(private httpClient: HttpClient) { }

  findAllMotives(): Observable<Motive[]> {
    console.log('Fetching suppliers from backend');
    return this.httpClient.get<Motive[]>(`${this.url}`);
  }

  findMotiveById(motiveId: number): Observable<Motive> {
    console.log('Fetching supplier from backend');
    return this.httpClient.get<Motive>(`${this.get}${motiveId}`);
  }

  saveMotive(motive: Motive): Observable<Motive> {
    console.log('Saving supplier to backend');
    return this.httpClient.post<Motive>(`${this.add}`, motive);
  }

  updateMotive(motive: Motive, motiveId: number): Observable<Motive> {
    console.log('Updating supplier to backend');
    return this.httpClient.put<Motive>(`${this.update}${motiveId}`, motive);
  }

  updateMotiveStatus(motive: Motive): Observable<Motive> {
    console.log('Updating supplier status to backend');
    return this.httpClient.patch<Motive>(`${this.update_status}${motive.motiveId}`, motive);
  }
}
