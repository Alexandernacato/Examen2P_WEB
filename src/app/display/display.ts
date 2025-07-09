import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-display',
  imports: [],
  templateUrl: './display.html',
  styleUrl: './display.css'
})
export class Display {
  @Input() imc!: number;
  @Input() categoria!: string;

  textoCategoria(): string {
    switch (this.categoria) {
      case 'bajo-peso': return 'Bajo peso';
      case 'normal': return 'Peso normal';
      case 'sobrepeso': return 'Sobrepeso';
      case 'obesidad': return 'Obesidad';
      default: return '';
    }
  }
}
