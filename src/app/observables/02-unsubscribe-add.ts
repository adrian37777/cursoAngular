
import { Observable, observable, Observer, subscribeOn, Subscriber } from 'rxjs';


export class AppComponent {
  title = 'Hola Adri que tal';



  constructor() {

    const observer: Observer<any> = {

      next: value => console.log('siguiente [next]', value),
      error: error => console.warn('error', error),
      complete: () => console.log('Completado')


    }

    const intervalo$ = new Observable<number>(Subscriber =>{
      // Crear contador 1,2,3,4 ....

      let count = 0;

    const interval =  setInterval(()=>{

        count++;
        Subscriber.next(count);
        console.log(count);
      

      },2500);


      setTimeout(()=>{

        Subscriber.complete();


      },3000)

      return ()=>{

        clearInterval(interval);
        console.log('intervalo destruido')
      }

    });

    const subs1 = intervalo$.subscribe(console.log);
    const subs2 = intervalo$.subscribe(console.log);
    const subs3 = intervalo$.subscribe(console.log);

    setTimeout(() => {
      subs1.unsubscribe();
      subs2.unsubscribe();
      subs3.unsubscribe();  
      
      console.log('Completado Timeout')
    }, 6000);

 


  }  


}
