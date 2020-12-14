import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  message = 'variable is from first.component.ts';

  constructor() { }

  ngOnInit(): void {
    console.log("First Component initialized");
  }

}
