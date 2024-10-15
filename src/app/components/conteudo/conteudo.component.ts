import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importe o FormsModule
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-conteudo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './conteudo.component.html',
  styleUrl: './conteudo.component.scss'
})
export class ConteudoComponent {

  nome: string = '';
  medico: string = '';
  mensagem: string = '';

  enviarMensagem() {
    // Encontre o médico correspondente ao ID selecionado
    const medicoSelecionado = this.medicos.find(medico => medico.id === this.selectedMedico);
    const medicoNome = medicoSelecionado ? medicoSelecionado.nome : 'não especificado';

    const mensagemWhatsApp = `Olá, meu nome é ${this.nome}. Vaga para ${medicoNome}. Mensagem: ${this.mensagem}`;
    const numeroWhatsApp = '5599999999999'; // Alterar para o número da clínica
    const url = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensagemWhatsApp)}`;
    window.open(url, '_blank');
  }


  selectedMedico: string | null = null; // Para armazenar o médico selecionado
  medicos = [
    { id: '1', nome: 'Dr. Hélio de Carvalho' },
    { id: '2', nome: 'Dr. Daniel Alvares' },
    { id: '3', nome: 'Dr. Romeu dos Santos' },
    // Adicione mais médicos conforme necessário
  ];
}
