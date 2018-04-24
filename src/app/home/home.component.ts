<<<<<<< HEAD
import { Component } from '@angular/core';
import { RopaService} from '../services/ropa.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  providers: [RopaService]
})

export class HomeComponent{
  public titulo = "Página principal home";
  public listado_ropa:Array<string>;
  public prenda_a_guardar:string;

  public fecha;
  public nombre = "juan lopez martinez";

  constructor(
    private _ropaService: RopaService
  ){
    this.fecha = new Date(2017, 4, 23);
  }

  ngOnInit(){
    this.listado_ropa = this._ropaService.getRopa();
    console.log(this.listado_ropa);
  }

  guardarPrenda(){
    this._ropaService.addRopa(this.prenda_a_guardar);
    this.prenda_a_guardar = null;
  }

  eliminarPrenda(index:number){
    this._ropaService.deleteRopa(index);
  }

}
=======
import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})

export class HomeComponent{
  public titulo = "Página principal home";
}
>>>>>>> c673af7adbeb30c3139ece1bd6ff7307d0d75a68
