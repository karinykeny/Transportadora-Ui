import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { MultiCardsModule } from "./modules/multi-cards/multi-cards.module";
import { RegisterModule } from "./modules/register/register.module";
import { MultiCardsComponent } from "./modules/multi-cards/multi-cards.component";
import { RegisterComponent } from "./modules/register/register.component";
import { UpdateDeleteComponent } from "./modules/update-delete/update-delete.component";
import { NotFoundComponent } from "./modules/update-delete/not-found/not-found.component";

const routes: Routes = [
  { path: "", component: AppComponent },
  { path: "/transportadoras", component: MultiCardsComponent },
  { path: "/transportadora/cadastrar", component: RegisterComponent },
  {
    path: "/transportadora/:id",
    component: UpdateDeleteComponent
  },
  { path: "/inexistente", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
