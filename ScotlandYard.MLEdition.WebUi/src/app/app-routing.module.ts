import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GameViewComponent } from "./game-view/game-view.component";

const routes: Routes = [{ path: "", component: GameViewComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
