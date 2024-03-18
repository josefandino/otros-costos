import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { AuthState } from '../store/auth.reduce';
import { AuthComponent } from '../auth.component';
import { login } from '../store/auth.actions';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly _http = inject(HttpClient);


  constructor(private http: HttpClient, private store: Store<{ auth: { token: string | null } }>) {}

  login(credentials: { username: string, password: string }): Observable<any> {

    return this.http.post('https://1b0e71286bf54a6e8138c6a227f9db85.api.mockbin.io/', credentials).pipe(
      tap((response: any) => {

        this.store.dispatch(login(response.token));
      })
    );
  }
}

