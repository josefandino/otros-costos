import { Component, OnInit, inject } from '@angular/core';
import { AngularModule, MaterialModule } from '../../shared/modules';
import { FormControl, FormGroup, Validators } from '@angular/forms';
//import { Router } from 'express';
import { LoginService } from './login.service';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { login } from '../store/auth.actions';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [
    AngularModule,
    MaterialModule
  ],
})
export class LoginComponent  {

  ingresarForm!: FormGroup;

  loaderBtn: boolean = false;
  mostrarPassword: boolean = false;

  private _unsubscribeAll: Subject<any> = new Subject<any>();

  // private _router = inject(Router);
  // private readonly _m = inject(MensajeGlobal);
  private readonly _loginService = inject(LoginService);

  constructor (private store: Store<{ auth: { token: string | null } }>){

  }

  ngOnInit(): void {
    this.initIngresarForm();
  }

  initIngresarForm(): void {
    this.ingresarForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      password: new FormControl('', [Validators.required]),
    });
  }

  noValidoForm(): void {
    // this._m.camposRequeridos();
  }

  validarForm(): void {

    if (this.ingresarForm.valid) {
      this.requestBody();
    } else {
      // this._m.camposRequeridos();
    }
  }

  alternarVisibilidad(): void {
    this.mostrarPassword = !this.mostrarPassword;
  }

  obtenerTipoInput(): any {
    return this.mostrarPassword ? 'text' : 'password';
  }

  requestBody(): void {
    const data = this.ingresarForm.value
    this.login(data)
  };

  login(body: any) {
    this.login(body);
  }


  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }




}
