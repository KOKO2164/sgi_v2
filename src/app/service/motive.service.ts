import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Motive } from '../models/motive';

@Injectable({
  providedIn: 'root'
})
export class MotivoService {

  private backendURL: string = "https://sowead.up.railway.app/motives";

  constructor(private httpClient: HttpClient) { }

  findAllMotives(): Observable<Motive[]> {
    console.log('Fetching suppliers from backend');
    return this.httpClient.get<Motive[]>(`${this.backendURL}`);
  }
}
