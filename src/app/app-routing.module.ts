import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { TableComponent } from '../screens/table/table.component';
import { LoginComponent } from '../screens/login/login.component';
import { AlwaysAuthGuard } from './always-auth.guard';
import { AddAnimalsComponent } from 'src/screens/add-animals/add-animals.component';

const routes: Routes = [
  { path: '', redirectTo:'login', pathMatch: 'full' },
  {  path: 'login', component: LoginComponent },
{
    path: 'animals',
    children :[
      { path: 'table', component: TableComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
