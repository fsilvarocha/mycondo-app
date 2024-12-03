import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Isso torna o serviço acessível globalmente na aplicação
})
export class GuidService {

  private readonly fixedGuid: string = '3fa85f64-5717-4562-b3fc-2c963f66afa6';

  constructor() { }

  getGuid(): string {
    return this.fixedGuid;
  }
}
