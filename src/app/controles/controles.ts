import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-controles',
  imports: [],
  templateUrl: './controles.html',
  styleUrl: './controles.css'
})
export class Controles {
  @Input() onIncrementar!: () => void;
  @Input() onDecrementar!: () => void;
  @Input() onReiniciar!: () => void;
}
