import { ComponentsGenericsModule } from './components-generics/components-generics.module';
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TransportadoraService } from "./core/transportadora.service";
import { HomeComponent } from './transportadora/home/home.component';
import { RegisterComponent } from './transportadora/register/register.component';
import { UpdateComponent } from './transportadora/update/update.component';
import { PageNotFoundComponent } from './transportadora/page-not-found/page-not-found.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, RegisterComponent, UpdateComponent, PageNotFoundComponent],
  imports: [BrowserModule, AppRoutingModule, ComponentsGenericsModule],
  providers: [TransportadoraService],
  bootstrap: [AppComponent]
})
export class AppModule {}
