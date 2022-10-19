import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllPaysComponent } from './pays/all-pays/all-pays.component';

const routes: Routes = [{
  path:'',
  component: AllPaysComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
