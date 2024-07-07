import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Motivo } from '../models/motivo';

@Injectable({
  providedIn: 'root'
})
export class MotivoService {

  private backendURL: string = "https://sowead.up.railway.app/users";

  constructor(private httpClient: HttpClient) { }

  findAllMotivos(): Observable<Motivo[]> {
    console.log('Fetching suppliers from backend');
    return this.httpClient.get<Motivo[]>(`${this.backendURL}`);
  }
}
