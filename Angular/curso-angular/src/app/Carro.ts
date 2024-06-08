export interface Carro {
  brand: string;
  horsePower: string;
  model: string;
}


carsDetail = '';
showSpecs(carro: Carro): void{
  this.carsDetail = `O carro ${carro.brand} tem ${carro.horsePower} cavalos ` 
}