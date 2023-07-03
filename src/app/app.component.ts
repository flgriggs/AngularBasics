import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  annenTeskt = "Dette er min tekst"

  inputMain = "input tekst fra main app"

  sommerStudent = {
    name : "Ingvil Ahlsand",
    email : "epost@epost.no",
    phone : "978978123"
  }
  

  sommerStudenter = [
    {
      name : "Ingvil Ahlsand",
      email : "epost@epost.no",
      phone : "978978123"
    },
    {
      name : "Finn Griggs",
      email : "finn.griggs@soprasteria.com",
      phone : "978978123"
    },
    {
      name : "Jørgen Midtgård",
      email : "jorgen.midtgaard@soprasteria.com",
      phone : "978978123"
    }
  ]


  
  setText() {
    this.title = "Ny tekst"
  }

  addStudent(value) {
    this.sommerStudenter.push(value)
  }
}
