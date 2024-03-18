import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private store: Store<{ auth: { token: string | null } }>) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let token:any;

    this.store.pipe(select(state => state.auth.token)).subscribe(storeToken => {
      token = storeToken;
    });


    if (token) {
      const authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
      return next.handle(authReq);
    } else {

      return next.handle(req);
    }
  }
}
