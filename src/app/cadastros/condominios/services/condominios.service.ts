import { HttpClient, HttpHeaders } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { CondominiosResponse } from "../models/Response/condominio.response";



const headers: HttpHeaders = new HttpHeaders().set(
    "Content-Type",
    "application/json"
);

@Injectable({
    providedIn:"root",
})

export class CondominiosService {
  private condominioAPI = environment.config.apis.condominioAPI;
  
  constructor(private http: HttpClient) {}

  ObterTodos(): Observable<CondominiosResponse[]> { 
    const url = `${this.condominioAPI}/obter-todos`;
    return this.http.get<CondominiosResponse[]>(url, { 
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    });
  }
}





  
