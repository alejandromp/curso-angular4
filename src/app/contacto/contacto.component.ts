<<<<<<< HEAD
import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'contacto',
  templateUrl: './contacto.component.html'
})

export class ContactoComponent{
  public titulo = "Página de contacto de la web";
  public parametro;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ){}

  ngOnInit(){
    this._route.params.forEach((params: Params) =>{
      //this.parametro = params['page'];
      this.parametro = params['page'];
    });
  }

  redirigir(){
    this._router.navigate(['./contacto', 'alejandrompweb.co'])
  }

  redirigirDos(){
    this._router.navigate(['./pagina-principal'])
  }
}
=======
import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'contacto',
  templateUrl: './contacto.component.html'
})

export class ContactoComponent{
  public titulo = "Página de contacto de la web";
  public parametro;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ){}

  ngOnInit(){
    this._route.params.forEach((params: Params) =>{
      //this.parametro = params['page'];
      this.parametro = params['page'];
    });
  }

  redirigir(){
    this._router.navigate(['./contacto', 'alejandrompweb.co'])
  }

  redirigirDos(){
    this._router.navigate(['./pagina-principal'])
  }
}
>>>>>>> c673af7adbeb30c3139ece1bd6ff7307d0d75a68
