import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  name: string = 'Renato';
  age:number = 31;
  job = 'Developer';
  hobbies = ['Correr', 'Jogar', 'Estudar'];
  car = {
    name: "RX-7",
    year: 1997,
  }
  constructor() { }

  ngOnInit(): void {
  }

}
