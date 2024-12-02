import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CondominiosResponse } from '../../models/Response/condominio.response';
import { CondominiosService } from '../../services/condominios.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-condominio',
  standalone: true,
  imports: [CommonModule],  
  templateUrl: './condominio.component.html',
  styleUrls: ['./condominio.component.css']
})
export class CondominioComponent implements OnInit {

  condominios: Array<CondominiosResponse> = [];

  constructor(private condominioService: CondominiosService) {}

  ngOnInit() {
    this.carregarCondominiosAsync();
  }

  carregarCondominios(): void {
    this.condominioService.ObterTodos().subscribe({
      next: (data) => {
        this.condominios = data;
      },
      error: (err) => {
        console.error('Erro ao carregar condomínios:', err);
      },
    });
  }

  async carregarCondominiosAsync(): Promise<void> {
    try {
      const data = await lastValueFrom(this.condominioService.ObterTodos());
      this.condominios = data;
    } catch (err) {
      console.error('Erro ao carregar condomínios:', err);
    }
  }

}
