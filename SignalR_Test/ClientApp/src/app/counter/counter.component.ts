import { Component } from '@angular/core';
import { HubConnectionBuilder, HubConnection } from '@microsoft/signalr';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public color:string;
  connection:HubConnection;
  constructor() {
     this.connection = new HubConnectionBuilder()
    .withUrl('/Colors')
    .build();
    this.connection.start().then( () => {
      console.log('Connected');
    });
  }

  public colorchanged(ev){

      this.connection.invoke('GetColorToOthers', ev).then(() => {
        console.log('Color has been sent : ', ev);
      }, (err) => {
        console.error(err);
      });
  }
}
