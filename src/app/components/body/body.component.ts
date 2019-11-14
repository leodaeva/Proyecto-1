import { Component } from '@angular/core';

@Component({
    selector: 'app-body', 
    templateUrl: './body.component.html',
    styleUrls: ['./body.component.css']
})
export class BodyComponent {

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

}