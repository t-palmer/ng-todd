import { Component, OnInit } from '@angular/core';
import { NgToddService } from 'ng-todd';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-todd-app';
  name: string;

  constructor(
    private ngToddService: NgToddService
  ) { }

  ngOnInit(): void {
    this.name = this.ngToddService.getName();
  }

}
