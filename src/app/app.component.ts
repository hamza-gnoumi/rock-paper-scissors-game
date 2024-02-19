import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { BattlefieldComponent } from './components/battlefield/battlefield.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  score: number = 0;
  stat = "hide"

  rest() {
    this.score = 0
  }
  showRules() {
    this.stat = "show"
  }
  hideRules() {
    this.stat = "hide";
  }

  subscription: Subscription;
  subscribeToEmiter(componentRef) {
    if (!(componentRef instanceof BattlefieldComponent)) {
      return;
    }
    const child: BattlefieldComponent = componentRef;
    child.score.subscribe(a => {
      this.score += a;
    });
  }
  unsubscribe() {
    if (this.subscription)
      this.subscription.unsubscribe();
  }

}
