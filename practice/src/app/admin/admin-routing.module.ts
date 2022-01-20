import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';

const adminroutes: Routes = [
  {path: 'admin', children: [
    {path: 'login', component: LoginComponent},
    {path:'list',component: ListComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(adminroutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
