import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css'],
})
export class EventosComponent implements OnInit {
  show: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  showMessage(): void {
    // this.show = true;  /// Isso muda a variavel pra true 
    this.show = !this.show; /// toggle recuso JS // aqui de maneira inteligente, como a variavel inicia em false
                            //// com o ! nós dizemos que ela sera sempre o contrário do que for
                            //// por isso, se ela for true, ela vai ser false, e vice versa
  }
}
