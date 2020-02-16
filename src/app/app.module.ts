import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ComponentsGenericsModule } from "./components-generics/components-generics.module";
import { SideBarModule } from "./modules/side-bar/side-bar.module";
import { MultiCardsModule } from "./modules/multi-cards/multi-cards.module";
import { TransportadoraService } from "./core/transportadora.service";
import { RegisterModule } from "./modules/register/register.module";
import { UpdateDeleteModule } from "./modules/update-delete/update-delete.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    RegisterModule,
    UpdateDeleteModule,
    MultiCardsModule,
    SideBarModule,
    ComponentsGenericsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TransportadoraService],
  bootstrap: [AppComponent]
})
export class AppModule {}
