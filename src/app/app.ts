import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Imc } from './imc/imc';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Imc],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Nacato_Freddy_IMC';
}
