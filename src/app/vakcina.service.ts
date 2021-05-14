import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Vakcina } from './Vakcina';

@Injectable({
  providedIn: 'root'
})
export class VakcinaService {

  private BASE_URL = environment.API_URL;

  constructor(private http: HttpClient) { }

  getVakcina(): Observable<Vakcina[]> {
    return this.http.get<Vakcina[]>(`${this.BASE_URL}/vakcina`);
  }

  createVakcina(date: string, name: string, age: number, email: string, telnum: number, taj: boolean): Observable<Vakcina> {
    return this.http.post<Vakcina>(`${this.BASE_URL}/vakcina`,
      {
        date, name, age, email, telnum, taj
      }
    );
  }

  cancelVakcina(id: string): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/vakcina/${id}`);
  }
}
