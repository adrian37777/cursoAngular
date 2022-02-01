import { Component } from '@angular/core';
import { Observable, observable, Observer, Subject, subscribeOn, Subscriber } from 'rxjs';



export class AppComponent {
    title = 'Curso Angular';
  
  
  
    constructor() {
  
      const observer: Observer<any> = {
  
        next: value => console.log('siguiente [next]', value),
        error: error => console.warn('error', error),
        complete: () => console.log('Completado')
  
  
      }
  
  
      const intervalo$ = new Observable<number>(subs=>{
  
      const intervalID =  setInterval(()=>{
  
             subs.next(Math.random())
  
        },1000)
  
        return ()=> {
  
          clearInterval(intervalID)
          console.log('intervalo destruido');
    
    
        }
      });
  
  
      /**
       * 1- Casteo mútiple
       * 2- También es un observer
       * 3- Next, error y complete
       */
  
  
  
      const subject$ = new Subject();
  
      const subscription =  intervalo$.subscribe(subject$);
   
  
       const subs1 =  subject$.subscribe(observer);
       const subs2 =  subject$.subscribe(observer);
  
    
  
  
       setTimeout(()=>{
  
        subject$.next(10);
        subscription.unsubscribe();     
        subject$.complete();
  
  
       },3500)
  
  
    }  
  
  
  }