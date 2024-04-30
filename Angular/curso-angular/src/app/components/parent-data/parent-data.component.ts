import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent implements OnInit {
  @Input() name: string = ''; // aqui inicio o dado com o valor vazio ''
  @Input() dataUser!: {email: string; role: string;  //já aqui com o !  para que  o Typescript entenda que ela vai ser iniciada, assim como acima
    idade: number; sexo: string; 
  }
  constructor() { }

  ngOnInit(): void {
  }

}
