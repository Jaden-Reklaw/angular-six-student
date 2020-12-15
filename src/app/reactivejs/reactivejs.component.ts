import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';

@Component({
  selector: 'app-reactivejs',
  templateUrl: './reactivejs.component.html',
  styleUrls: ['./reactivejs.component.css']
})
export class ReactivejsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.mouseLog();

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

}
