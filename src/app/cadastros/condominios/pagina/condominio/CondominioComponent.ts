import { CommonModule } from "@angular/common";
import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ReactiveFormsModule, FormGroup, FormBuilder } from "@angular/forms";
import { lastValueFrom } from "rxjs";
import { MensagenService } from 'src/app/shared/services/mensagem.service';
import { CondominiosService } from 'src/app/cadastros/condominios/services/condominios.service';


@Component({
  selector: 'app-condominio',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './condominio.component.html',
  styleUrls: ['./condominio.component.css']
})
export class CondominioComponent implements OnInit {

  condominioForm!: FormGroup;

  constructor(private fb: FormBuilder,
    private condominioService: CondominiosService,
    private mensagensService : MensagenService
) { }

  ngOnInit() {
    this.inicializarFormulario();
    this.carregarCondominiosAsync();
  }

  inicializarFormulario() {
    this.condominioForm = this.fb.group({
      id: [''],
      tenante: [''],
      nome: [''],
      cnpj: [''],
      cidade: [''],
      bairro: [''],
      cep: [''],
      logradouro: [''],
      complemento: [''],
      numero: ['']
    });
  }

  async carregarCondominiosAsync(): Promise<void> {
    try {
      const data = await lastValueFrom(this.condominioService.ObterTodos());

      if (data && data.length > 0) {
        const condominio = data[0];
        const mappedData = {
          id: condominio.id || '',
          tenante: condominio.tenante || '',
          nome: condominio.nome || '',
          cnpj: condominio.cnpj || '',
          cidade: condominio.cidade || '',
          bairro: condominio.bairro || '',
          cep: condominio.cep || '',
          logradouro: condominio.logradouro || '',
          complemento: condominio.complemento || '',
          numero: condominio.numero || ''
        };

        this.condominioForm.patchValue(mappedData);
      } else {
        this.mensagensService.showAlertaMessage("Condomínio nao encontrado/cadastrado");
      }
    } catch (err) {
      console.error('Erro ao carregar condomínios:', err);

      if (err instanceof HttpErrorResponse) {
        console.error('Erro HTTP:', err.message);
        if (!err.message.endsWith("undefined"))
          this.mensagensService.showErrorMessage();
      } else {
        // Caso seja outro tipo de erro, exiba um erro genérico
        this.mensagensService.showErrorMessage();
      }

    }
  }



  onSubmit() {
    if (this.condominioForm.valid) {
      const formValues = this.condominioForm.value;
      console.log('Dados enviados:', formValues);
      this.mensagensService.showSucessoMessage("Dados enviados com sucesso");
      // Lógica para enviar os dados
    } else {
      console.log('Formulário inválido');
    }
  }
}
