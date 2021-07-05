import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count: number = 0;
  

  increment() {
    this.count = this.count + 1;
  }
  decrement() {
    this.count = this.count - 1;
  }
  reset() {
    this.count = 0;
  }
  
}
