import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cantSinPadrino: number;
  cantSinTrabajo: number;
  cantEmpleosDisponibles: number;
  cantCursosDisponibles: number;

  constructor() {
    this.cantSinPadrino = 6;
    this.cantSinTrabajo = 8;
    this.cantEmpleosDisponibles = 10;
    this.cantCursosDisponibles = 15;
  }

  ngOnInit() {
  }

}
