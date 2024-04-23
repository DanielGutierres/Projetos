import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Joaquim';

  userData = {
    email: 'joaquimbililagrande@gmail.com',
    role: 'Admin',
    idade: 21,
    sexo: 'Masculino',
  }
  title = 'curso-angular';
}
