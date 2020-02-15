import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MultiCardsComponent } from "./multi-cards.component";

@NgModule({
  declarations: [MultiCardsComponent],
  imports: [CommonModule],
  exports: [MultiCardsComponent]
})
export class MultiCardsModule {}
