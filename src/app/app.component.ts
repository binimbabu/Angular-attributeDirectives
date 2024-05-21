import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  toggleOn:boolean = false;
  change(){
    this.toggleOn = !this.toggleOn;
  }
}
