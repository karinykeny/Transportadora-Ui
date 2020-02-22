import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TransportadoraService } from "./core/transportadora.service";
import { HeaderComponent } from "./components-generics/header/header.component";
import { FooterComponent } from "./components-generics/footer/footer.component";
import { SideBarModule } from "./modules/side-bar/side-bar.module";

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule, SideBarModule],
  providers: [TransportadoraService],
  bootstrap: [AppComponent]
})
export class AppModule {}
