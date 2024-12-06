import { CommonModule } from "@angular/common";
import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ReactiveFormsModule, FormGroup, FormBuilder } from "@angular/forms";
import { lastValueFrom } from "rxjs";
import { MensagenService } from 'src/app/shared/services/mensagem.service';
import { CondominiosService } from 'src/app/cadastros/condominios/services/condominios.service';
import { TipoCondonminioEnum, TipoCondonminioEnumDescricao } from "src/app/shared/enumeradores/tipo-condominio.enum";
import { CondominiosEditarRequest } from 'src/app/cadastros/condominios/models/Request/condominio-editar.request';


@Component({
  selector: 'app-condominio',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './condominio.component.html',
  styleUrls: ['./condominio.component.css']
})
export class CondominioComponent implements OnInit {

  condominioForm!: FormGroup;
  tipoCondominioOpcoes: { id: TipoCondonminioEnum; descricao: string }[] = [];

  constructor(private fb: FormBuilder,
    private condominioService: CondominiosService,
    private mensagensService : MensagenService
) { 
  this.condominioForm = this.fb.group({
    tipoCondominio: [null], 
  });
}

  ngOnInit(): void {
    this.inicializarFormulario();
    this.carregarCondominiosAsync();

  }

  inicializarFormulario() {
    this.condominioForm = this.fb.group({
      id: [''],
      tenante: [''],
      nome: [''],
      cnpj: [''],
      tipoCondominio:[''],
      logo:[''],
      areaTotal:[''],
      cep: [''],
      cidade: [''],
      uf:[''],
      bairro: [''],
      logradouro: [''],
      numero: [''],
      complemento: ['']
    });
  }

  async carregarCondominiosAsync(): Promise<void> {
    try {
      const data = await lastValueFrom(this.condominioService.ObterTodos());

      if (data && data.length > 0) {
        const condominio = data[0];
        condominio.tipoCondominioDescricao = TipoCondonminioEnumDescricao[condominio.tipoCondominio];
        this.tipoCondominioOpcoes = Object.keys(TipoCondonminioEnum)
        .filter(key => !isNaN(Number(key))) 
        .map(key => ({
          id: Number(key),
          descricao: TipoCondonminioEnumDescricao[Number(key) as TipoCondonminioEnum]
        }));
        this.condominioForm.patchValue(condominio);
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

 


  async onSubmit(): Promise<void> {
    if (this.condominioForm.valid) {
      const formValues = this.condominioForm.value;

      const editarRequest = new CondominiosEditarRequest({
        id: formValues.id,
        tenante: formValues.tenante,
        nome: formValues.nome,
        cnpj: formValues.cnpj,
        tipoCondominio: Number(formValues.tipoCondominio),
        logo: formValues.logo,
        areaTotal: formValues.areaTotal,
        cep: formValues.cep,
        cidade: formValues.cidade,
        uf: formValues.uf,
        bairro: formValues.bairro,
        logradouro: formValues.logradouro,
        numero: formValues.numero,
        complemento: formValues.complemento,
      });
      try {
        // Envia o objeto para a API usando o CondominiosService
        await lastValueFrom(this.condominioService.editarCondominio(editarRequest));
        this.mensagensService.showSucessoMessage('Condomínio editado com sucesso!');
      } catch (error) {
        console.error('Erro ao editar condomínio:', error);
        this.mensagensService.showErrorMessage('Erro ao editar condomínio. Verifique os dados e tente novamente.');
      }
    } else {
      console.log('Formulário inválido');
      this.mensagensService.showAlertaMessage('Formulário inválido. Preencha todos os campos obrigatórios.');
    }
  }

}
