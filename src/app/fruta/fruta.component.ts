import { Component } from '@angular/core';

@Component({
    selector: 'fruta',
    templateUrl: './fruta.component.html'
})

export class FrutaComponent{
  public nombre_componente = 'Componente de fruta';
  public listado_frutas = 'Naranja, Manzana, Pera y sandia';

  public nombre:string;
  public edad:number;
  public mayordeEdad:boolean;
  public trabajos:Array<any> = ['Carpintero', 44, 'Fontanero'];
  comodin:any;

  constructor(){
    this.nombre = 'Alejandro Montoya';
    this.edad = 43;
    this.mayordeEdad = false;
    this.comodin ="SI";
  }

  ngOnInit(){
      //this.cambiarNombre('Adriana Carmona');
    //  this.cambiarEdad(45);
      //console.log(this.nombre + " " + this.edad); 
  }

  cambiarNombre(){
    this.nombre = "Adriana Carmona";
  }

/*  cambiarEdad(edad){
    this.edad = edad;
  }*/

}
