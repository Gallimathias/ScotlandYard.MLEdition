import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../authentication.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-semi-login",
  templateUrl: "./semi-login.component.html",
  styleUrls: ["./semi-login.component.scss"],
})
export class SemiLoginComponent implements OnInit {
  public CurrentId: string = "";

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {
    authService.newSemiId().subscribe((guid) => (this.CurrentId = guid));
  }

  ngOnInit() {}

  public login() {
    this.authService
      .semiLogin(this.CurrentId)
      .subscribe((auth) => this.router.navigateByUrl("/game"));
  }
}
