import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  public IsAuthenticated: boolean = false;

  private baseUri: string = "api/authentication/";
  constructor(private httpClient: HttpClient) {
    this.load();
  }

  public getToken() {
    return localStorage.getItem("bearer");
  }

  public getBearer() {
    return "bearer " + this.getToken();
  }

  private setToken(token: string) {
    localStorage.setItem("bearer", token);
  }

  public login(username: string, password: string) {
    this.httpClient
      .post(
        this.baseUri + "login/user",
        {
          Username: username,
          Password: password,
        },
        { responseType: "text" }
      )
      .subscribe((token) => {
        this.setToken(token);
        this.IsAuthenticated = true;
      });
  }

  public newSemiId(): Observable<string> {
    return this.httpClient.get(this.baseUri + "newguid", {
      responseType: "text",
    });
  }

  public semiLogin(guid: string): Observable<boolean> {
    return this.httpClient
      .post(
        this.baseUri + "login/semi",
        { SemiId: guid },
        { responseType: "text" }
      )
      .pipe(
        map((token) => {
          this.setToken(token);
          this.IsAuthenticated = true;
          return this.IsAuthenticated;
        })
      );
  }

  private load(): void {
    let bearer = this.getToken();

    if (bearer) {
      this.httpClient.get(this.baseUri + "test").subscribe(
        (v) => (this.IsAuthenticated = true),
        (ex) => (this.IsAuthenticated = false)
      );
    } else {
      this.IsAuthenticated = false;
    }
  }
}
