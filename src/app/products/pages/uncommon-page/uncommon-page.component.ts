import { Component } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { interval } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  //i18n Select

  public name : string = 'Duvan';
  public gender : 'male'| 'female' = 'male';
  public invitationMap = {
    male : 'invitarlo',
    female : 'invitarla'
  }

  /**
   * ChangeClient
   * metodo para cambiar la persona
   */
  public ChangeClient = () => {
    this.name = 'Melissa';
    this.gender = 'female';
  }


  //i18nPlural
  public clients: string[] = ['Maria','Pedro','Anguie','Tatiana','Karen','Alejandra','Duvan','David']
  public clientsMap = {
    '=0': ' no tenemos ningun cliente esperando',
    '=1': ' tenemos un cliente esperando',
    '=2': ' tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando',

  }
  public deleteClient = () => {
    this.clients.shift();
  }

  // KeyValuePipe - JsonPipe
  public person = {
    name : 'Duvan',
    age : 23,
    address: 'Bogota, Colombia'
  }

  // Async Pipe
  // public myObservableTimer: Observable<number> = interval(2000).pipe(
  //   tap( value => console.log('tap:', value ) ),
  // );

  // public promiseValue: Promise<string> = new Promise( (resolve, reject) => {
  //   setTimeout(() => {
  //     resolve( 'Tenemos data en la promesa.' );
  //     console.log( 'Tenemos data en la promesa.' );
  //     this.person.name = 'Otro nombre'
  //   }, 3500);
  // })
}
