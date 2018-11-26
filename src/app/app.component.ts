import {Component} from '@angular/core';

@Component({
  selector: 'greet-comp',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web-component';
  isElementDisplayed1 = true;
  isElementDisplayed2 = true;
  isElementDisplayed3 = true;

  toggle1() {
    this.isElementDisplayed1 = !this.isElementDisplayed1;
    console.log(this.isElementDisplayed1);
  }

  toggle2() {
    this.isElementDisplayed2 = !this.isElementDisplayed2;
  }

  toggle3() {
    this.isElementDisplayed3 = !this.isElementDisplayed3;
  }
}
