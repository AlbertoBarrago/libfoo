import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'foo-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  doSomething = () => {
    alert('te lo dissi che non facevo nulla!');
  }

}
