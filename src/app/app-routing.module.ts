import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YourturnComponent } from './components/yourturn/yourturn.component';
import { BattlefieldComponent } from './components/battlefield/battlefield.component';

const routes: Routes = [
  { path: '', component: YourturnComponent },
  { path: 'battle/:yours', component: BattlefieldComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
