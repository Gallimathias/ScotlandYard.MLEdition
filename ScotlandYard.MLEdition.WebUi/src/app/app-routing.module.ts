import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GameViewComponent } from "./game-view/game-view.component";
import { SemiLoginComponent } from "./semi-login/semi-login.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/semi-login" },
  { path: "game", component: GameViewComponent },
  { path: "semi-login", component: SemiLoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
