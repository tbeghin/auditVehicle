import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as auth0 from 'auth0-js';

(window as any).global = window;

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  auth0 = new auth0.WebAuth({
    clientID: 'HCVM9r9xODyFcCs54XulKquKrDeRA8kx',
    domain: 'tbeghin.eu.auth0.com',
    responseType: 'token id_token',
    audience: 'https://www.idexvehicule.fr',
    redirectUri: 'http://localhost:4200/dashboard',
    scope: 'openid profile read:messages'
  });

  constructor(public router: Router) {}

  login(): void {
    this.auth0.authorize();
  }

  handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
        console.log(authResult);
        this.router.navigate(['/dashboard']);
      } else if (err) {
        this.router.navigate(['/dashboard']);
        console.error(err);
      }
    });
  }

  logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('user');
    localStorage.removeItem('expires_at');
    // Go back to the home route
    this.router.navigate(['/dashboard']);
  }

  isAuthenticated(): boolean {
    const expiresAt = JSON.parse(localStorage.getItem('expires_at') || '{}');
    return new Date().getTime() < expiresAt;
  }

  private setSession(authResult): void {
    // Set the time that the Access Token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('user', JSON.stringify(authResult.idTokenPayload));
    localStorage.setItem('expires_at', expiresAt);
  }
}
