import { Component } from '@angular/core';
import { of } from 'rxjs';


export class AppComponent {
  title = 'Curso Angular';

  constructor() {
    const ob$ = of(...[1,2],{a:1, b:2}, function(){},true,Promise.resolve(true));

    console.log('Inicio del OBS')
    ob$.subscribe(
      (next) => console.log('next', next),
      null,
      () => console.log('terminamos la secuencia')
    );

    console.log('Fin del OBS')
  }
}
