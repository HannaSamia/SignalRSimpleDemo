import { Component } from '@angular/core';
import { HubConnectionBuilder } from '@microsoft/signalr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  color = '';

  constructor() {
    const connection = new HubConnectionBuilder()
    .withUrl('/Colors')
    .build();

    connection.on('ReceiveColor', (color: string) => {
        this.color = color;
    });
    connection.start().then( () => {
      console.log('Connected');
    });
  }

}
