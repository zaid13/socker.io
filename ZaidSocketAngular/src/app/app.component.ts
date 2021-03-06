import { Component, OnInit } from '@angular/core';
// import { Socket } from 'dgram';

import { io, Socket } from 'socket.io-client';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ZaidSocketAngular';

  ngOnInit():void {
    console.log('data');

    const socket =io('http://localhost:8050/', { transports: ['websocket', 'polling', 'flashsocket'] });
    socket.on('hello ',(data:any) => console.log(data));

  }
}
