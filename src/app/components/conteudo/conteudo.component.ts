import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importe o FormsModule


@Component({
  selector: 'app-conteudo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './conteudo.component.html',
  styleUrl: './conteudo.component.scss'
})
export class ConteudoComponent {

  nome: string = '';
  email: string = '';
  mensagem: string = '';

  enviarMensagem() {
    const mensagemWhatsApp = `Olá, meu nome é ${this.nome}. Meu e-mail é ${this.email}. Mensagem: ${this.mensagem}`;
    const numeroWhatsApp = '5599999999999'; // Altere para o número da clínica
    const url = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensagemWhatsApp)}`;
    window.open(url, '_blank');
  }

}
