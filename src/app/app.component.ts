import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toggled = false;
  clicksArray = [];
  changeColor = false;

  onButtonClick() {
    this.toggled = !this.toggled;
    this.clicksArray.push(new Date());
  }
}
