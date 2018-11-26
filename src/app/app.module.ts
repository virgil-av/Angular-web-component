import {BrowserModule} from '@angular/platform-browser';
import {NgModule, Injector} from '@angular/core';
import {createCustomElement} from '@angular/elements';
import { ElementZoneStrategyFactory } from 'elements-zone-strategy';


import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [
    AppComponent
  ]
})
export class AppModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const strategyFactory = new ElementZoneStrategyFactory(AppComponent, this.injector);
    const el = createCustomElement(AppComponent, {injector: this.injector, strategyFactory});
    customElements.define('greet-comp', el);
  }
}
