import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})

export class MensagenService {

  constructor(private toastr: ToastrService) { }

  showErrorMessage() {
    this.toastr.error('Ocorreu um erro inesperado', 'Erro');
  }

  showAlertaMessage(msg: string) {
    this.toastr.warning(msg, 'Atenção');
  }

  showInfoMessage(msg: string) {
    this.toastr.info(msg, 'Informação');
  }  

  showSucessoMessage(msg: string) {
    this.toastr.success(msg, 'Sucesso');
  }  
}
