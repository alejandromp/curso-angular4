import { Component } from '@angular/core';
import { Empleado } from './Empleado';

@Component({
    selector: 'empleado',
    templateUrl: './empleado.component.html'
})

export class EmpleadoComponent{
  public titulo_componente = 'Componente Empleados';
  public empleado:Empleado;

  ngOnInit(){
    this.empleado = new Empleado('Pepito Pérez', 33, 'Cocinero', true);
    console.log(this.empleado);
  }
}
