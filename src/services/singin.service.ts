import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class SinginService {
  constructor(
    private https: HttpClient,
  ) { }

  private basePath = environment.host + '/api/users';

  isAuthenticated(): boolean {
    return (this.getValueLocalStorage('token') !== null) ? true : false;
  }

  singIn(email: string, password: string): Promise<any> {
    const body = { email, password };

    return new Promise((resolve, reject) => {
      this.https.post(`${this.basePath}/login`, body).subscribe((response: any) => {
        console.log("✅ Respuesta API:", response);

        if (response.token) {
          localStorage.setItem('token', JSON.stringify(response.token));
        }

        resolve(response);
      },
        (error: any) => {

        }
      );
    });
  }

  getValueLocalStorage(identifier: string) {
    return JSON.parse(localStorage.getItem(identifier)!);
  }

}
