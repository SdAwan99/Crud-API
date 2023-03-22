import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './User/index/index.component';

const routes: Routes = [
  {path:'user', redirectTo: 'user/index', pathMatch: "full"},
  {path:'user/index', component:IndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
