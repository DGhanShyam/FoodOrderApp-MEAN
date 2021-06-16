import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import {TodaysMenuComponent} from '../app/todays-menu/todays-menu.component'
const routes: Routes  = [
  { path: 'todayMenu', component: TodaysMenuComponent },

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
