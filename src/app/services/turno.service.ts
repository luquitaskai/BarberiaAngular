import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Turno } from '../models/turno.model';

const baseUrl = 'http://localhost:8000/api/reservar_turno';

@Injectable({
  providedIn: 'root'
})
export class TurnoService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Turno[]> {
    return this.http.get<Turno[]>(baseUrl);
  }

  get(id: any): Observable<Turno> {
    return this.http.get<Turno>(`${baseUrl}/${id}`);
  }

  crear(dato: any): Observable<any> {
    return this.http.post(baseUrl, dato);
  }

  update(id: any, dato: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, dato);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Turno[]> {
    return this.http.get<Turno[]>(`${baseUrl}?title=${title}`);
  }
}