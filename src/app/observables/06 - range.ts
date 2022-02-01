import { Component } from '@angular/core';
import { range, of, asyncScheduler } from 'rxjs';


export class AppComponent {
  title = 'Curso Angular';

  constructor() {


    // const src$ = of(1,2,3,4,5);

    const src$ = range(1,5,asyncScheduler);
    

    console.log('Inicio');
    src$.subscribe(console.log)
    console.log('Final');

  }
}
