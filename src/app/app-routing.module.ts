import { PageNotFoundComponent } from './transportadora/page-not-found/page-not-found.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './transportadora/home/home.component';
import { UpdateComponent } from './transportadora/update/update.component';
import { RegisterComponent } from './transportadora/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'cadastrar', component: RegisterComponent },
  { path: 'atualizar-deletar-transportadora', component: UpdateComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
