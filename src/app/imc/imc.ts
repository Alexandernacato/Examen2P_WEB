import { Component, signal } from '@angular/core';
import { Display } from '../display/display';
import { Controles } from '../controles/controles';

@Component({
  selector: 'app-imc',
  imports: [Display, Controles],
  templateUrl: './imc.html',
  styleUrl: './imc.css'
})
export class Imc {
peso = signal(40); 
  altura = 1.65; 

  incrementarPeso = () => this.peso.update(p => p + 1);
  decrementarPeso = () => this.peso.update(p => Math.max(40, p - 1));
  reiniciarPeso = () => this.peso.set(40);

  imc() {
    const imcValor = this.peso() / (this.altura * this.altura);
    return parseFloat(imcValor.toFixed(1));
  }

  categoria() {
    const imc = this.imc();
    if (imc < 18.5) return 'bajo-peso';
    if (imc < 25) return 'normal';
    if (imc < 30) return 'sobrepeso';
    return 'obesidad';
  }
}
