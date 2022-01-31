import { Observable, observable, Observer, subscribeOn, Subscriber } from 'rxjs';


export class AppComponent {
  title = 'Hola Adri que tal';



  constructor() {

    const observer: Observer<any> = {

      next: value => console.log('siguiente [next]', value),
      error: error => console.warn('error', error),
      complete: () => console.log('Completado')


    }

 

    const obs$ = new Observable((Subscriber) => {
      Subscriber.next('Hola');
      Subscriber.next('Mundo');

    
      Subscriber.complete();

    });

    obs$.subscribe( observer);
    
  }


}
