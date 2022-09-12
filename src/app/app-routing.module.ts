import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete.component';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {
    component:AddComponent,
    path:'add'
  },
  {
    component:UpdateComponent,
    path:'update'
  },
  {
    component:ListComponent,
    path:'get'
  },
  {
    component:DeleteComponent,
    path:'del'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
