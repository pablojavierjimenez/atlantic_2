import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { IUserData } from '../models/IUserData.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authUrl = 'https://localhost:8443/project-name';

  /**
   * nota: why exclamation mark
   * @link https://bit.ly/3x9DWGP
   */
  private userData!: IUserData;

  constructor(private http: HttpClient) {
    /**
     * @link HttpClient Documentation: https://angular.io/api/common/http/HttpClient
     */
  }

  login(model: any): Observable<any> {
    return this.http.post('http://localhost:8080/api/users', model).pipe(
      map((response: any) => {
        console.log('res', response);
        this.userData = response;

        if (this.userData.result.succeeded) {
          localStorage.setItem('expirationToken', this.userData.sessionToken);
          sessionStorage.setItem('sessionToken', this.userData.sessionToken);
          sessionStorage.setItem('refreshToken', this.userData.refreshToken);
        }
      })
    );
  }
}
