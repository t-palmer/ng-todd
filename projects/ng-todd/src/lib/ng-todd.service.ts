import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgToddService {

  constructor() { }

  getName() {
    return 'Todd';
  }
}
