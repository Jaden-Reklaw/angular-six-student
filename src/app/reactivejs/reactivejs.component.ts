import { Component, EventEmitter, OnInit } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';


export class IconWithBadge {
  symbol: string;
  count: number;
  color: string;
  position?: string;
  size?: string;

  constructor(symbol:string, count: number, color: string) {
    this.symbol = symbol;
    this.count = count;
    this.color = color;
  }
}

@Component({
  selector: 'app-reactivejs',
  templateUrl: './reactivejs.component.html',
  styleUrls: ['./reactivejs.component.css']
})

export class ReactivejsComponent implements OnInit {

  iconList: IconWithBadge[] = [
    {symbol: 'home', count: 13, color: 'warn', size: 'large'},
    {symbol: 'bookmark', count: 7, color: 'warn'},
    {symbol: 'cached', count: 10, color: 'primary', size: 'medium'},
    {symbol: 'dashboard', count: 1, color: 'accent', size: 'medium', position: 'before below'},
  ];

  evtEmitter = new EventEmitter();
  events: string[] = [];

  constructor() { }

  ngOnInit(): void {
    //this.mouseLog();
    this.subscribeEventEmitter();

    const obs = Observable.create((observer:any) => {
        observer.next("Welcome Back Developer!");
        observer.next("Welcome Back Again, Developer!");
        observer.next("You keep coming back Developer!");
        observer.next("We're done!");
    });

    obs.subscribe(x => this.addToList(x));
    obs.subscribe(y => this.addToList("Second Observation " + y));
  }

  addToList(value: string){
    const node = document.createElement('li');
    node.appendChild(document.createTextNode(value));
    document.getElementById('obs-list')?.appendChild(node);
  }

  mouseLog() {
    fromEvent(document.body, 'mousemove').subscribe((e:any) => {
      console.log(e.pageX, e.pageY);
    })
  }

  evtClick() {
    let randomNumber = Math.random();
    this.evtEmitter.emit(randomNumber);
  }

  subscribeEventEmitter() {
    this.evtEmitter.subscribe((e) => {
      console.log('From event emitter', e);
      this.events.push(e);
    });
  }
}
