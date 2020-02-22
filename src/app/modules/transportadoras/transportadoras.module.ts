import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NotFoundComponent } from "./not-found/not-found.component";
import { UpdateDeleteComponent } from "./update-delete/update-delete.component";
import { TransportadorasComponent } from "./transportadoras.component";
import { TransportadorasRoutingModule } from "./transportadoras.routing.module";

@NgModule({
  declarations: [
    TransportadorasComponent,
    NotFoundComponent,
    UpdateDeleteComponent
  ],
  imports: [CommonModule, TransportadorasRoutingModule],
  exports: [],
  providers: []
})
export class TransportadorasModule {}
