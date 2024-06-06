import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

  animals: Animal[] = [
    { name: 'Turca', type: 'Dog', age: 12},
    { name: 'Tom', type: 'Cat', age: 2},
    { name: 'Frida', type: 'Dog', age: 10},
    { name: 'Bob', type: 'Horse', age: 8},
  ];

  animalsDetais = '';
  showAge(animal: Animal){
    this.animalsDetais = `O pet ${animal.name} tem ${animal.age} anos!`; 
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
