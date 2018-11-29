import {Component, EventEmitter, OnChanges, Output, SimpleChanges, Input} from '@angular/core';

@Component({
  selector: 'greet-comp',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges {
  title = ' Angular web element with input';

  @Input() label = '';
  @Output() action = new EventEmitter<number>();
  isElementDisplayed1 = true;
  isElementDisplayed2 = true;
  isElementDisplayed3 = true;
  private numberOfClicks = 0;

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  handleClick(event) {
    this.numberOfClicks++;
    this.action.emit(this.numberOfClicks);
  }

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
