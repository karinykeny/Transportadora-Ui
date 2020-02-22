import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TransportadorasComponent } from "./transportadoras.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { UpdateDeleteComponent } from "./update-delete/update-delete.component";

const transportadorasRoutes: Routes = [
  { path: "", component: TransportadorasComponent },
  { path: "naoEncontrada", component: NotFoundComponent },
  { path: ":id", component: UpdateDeleteComponent }
];

@NgModule({
  imports: [RouterModule.forChild(transportadorasRoutes)],
  exports: [RouterModule]
})
export class TransportadorasRoutingModule {}
