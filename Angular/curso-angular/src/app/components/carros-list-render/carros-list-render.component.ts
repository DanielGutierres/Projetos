import { Component, OnInit } from '@angular/core';
import { Carro } from 'src/app/Carro';

@Component({
  selector: 'app-carros-list-render',
  templateUrl: './carros-list-render.component.html',
  styleUrls: ['./carros-list-render.component.css']
})
export class CarrosListRenderComponent implements OnInit {

  carros: Carro[] = [
    {brand: 'Chevrolet', horsePower: '180', model:'Vectra' },
    {brand: 'Fiat ', horsePower: '170', model:'Pulse' },
    {brand: 'Volkswagen', horsePower: '190', model:'Nivus' },
    {brand: 'BMW', horsePower: '192', model:'BMW 320i' },
  ];

  carsDetail = '';
  showSpecs(carro: Carro): void{
    this.carsDetail = `O ${carro.model} tem ${carro.horsePower} cavalos ` 
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
