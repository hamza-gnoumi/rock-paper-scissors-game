import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YourturnComponent } from './components/yourturn/yourturn.component';
import { BattlefieldComponent } from './components/battlefield/battlefield.component';

@NgModule({
  declarations: [
    AppComponent,
    YourturnComponent,
    BattlefieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
