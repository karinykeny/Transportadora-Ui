import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UpdateDeleteComponent } from "./update-delete.component";
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [UpdateDeleteComponent, NotFoundComponent],
  imports: [CommonModule],
  exports: [UpdateDeleteComponent]
})
export class UpdateDeleteModule {}
