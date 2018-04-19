import { Component } from '@angular/core';
import { Empleado } from './Empleado';

@Component({
    selector: 'empleado',
    templateUrl: './empleado.component.html'
})

export class EmpleadoComponent{
  public titulo_componente = 'Componente Empleados';
  public empleado:Empleado;
  public trabajadores:Array<Empleado>;
  public trabajador_externo:boolean;
  public color:string;
  public color_seleccionado:string;

  constructor(){
    this.empleado = new Empleado('Pepito Pérez', 33, 'Cocinero', true);

    this.trabajadores= [
      new Empleado('Ana posada', 25, 'Cocinero', true),
      new Empleado('Javier Herrera', 40, 'Cocinero', true),
      new Empleado('Paola Gimenez', 32, 'Cocinero', true)
    ];
    this.trabajador_externo = true;
    this.color = 'blue';
    this.color_seleccionado = '#ccc';
  }

  ngOnInit(){
    console.log(this.empleado);
    console.log(this.trabajadores);
  }

  cambiarExterno(valor){
    this.trabajador_externo = valor;
  }

  logColorSeleccionado(){
    console.log(this.color_seleccionado);
  }

}
