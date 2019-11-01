import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public loginData: string;

  public passwordData: string;

  constructor(public router: Router) { }

  static setLocalStorage(login, password) {
    localStorage.setItem('login', login);
    localStorage.setItem('password', password);
  }

  private static getLocalStorageItem(login, password): [string, string] {
    const log = localStorage.getItem(login);
    const pass = localStorage.getItem(password);

    return [log, pass];
  }

  public login(login: string, password: string): void {
    this.loginData = login;
    this.passwordData = password;

    if (login && password) {

      LoginService.setLocalStorage(login, password);

      this.router.navigateByUrl('/board');
    }
  }

  public logout(): void {
    localStorage.clear();
    this.router.navigateByUrl('/login-page');
  }
}
