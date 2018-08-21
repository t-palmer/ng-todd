import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todd-ng-todd',
  template: `
    <p>
      <ng-content></ng-content>
    </p>
  `,
  styles: []
})
export class NgToddComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
