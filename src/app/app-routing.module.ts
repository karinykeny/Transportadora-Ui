import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";

const routes: Routes = [
  {
    path: "transportadora",
    loadChildren:
      "app/modules/transportadoras/transportadoras.module#TransportadorasModule"
  },
  {
    path: "cadastro-transportadora",
    loadChildren: "app/modules/register/register.module#RegisterModule"
  },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
