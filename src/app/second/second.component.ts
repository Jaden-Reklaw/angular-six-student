/**
 * Create folder
 * Create html
 * Create typescript file
 * Connect this file to component html file
 * Connect on app.module.js through import and adding to ngmodule
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
})
export class SecondComponent implements OnInit {
  message2 = 'variable is from second.component.ts';

  constructor() { }

  ngOnInit(): void {
    console.log("Second Component initialized");
  }

}