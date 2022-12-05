import { Component, NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PersonasComponent } from "./personas/personas.component";
import { UsersComponent } from "./users/users.component";
  const routes: Routes=[
    {path:'users',component:UsersComponent},
    {path:'personas',component:PersonasComponent}
  ];


@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}

