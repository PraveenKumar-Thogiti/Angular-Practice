import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatabindingComponent } from './databinding/databinding.component';
import { FormsComponent } from './forms/forms.component';

const routes: Routes = [
  { path:'forms',component:FormsComponent},
  { path:'databinding',component:DatabindingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
