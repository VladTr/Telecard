import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  template: `
    <div class="admin">
      <h4>
        Admin panel
      </h4>
      <div class="logged">
        <div *ngIf="logged==true">
        You logged
        <p><button class="btn btn-danger" (click)="logOut()">Logout</button></p>
        </div>
        <div *ngIf="logged==false">
        You are not logged
        </div>
      </div>
      <p>
      Please enter your email & password
      </p>
      <form [formGroup]="myForm" (ngSubmit)="sign()">
          <div class="form-group">
          <label for="email">E-Mail</label>
          <input formControlName="email" type="email" id="email" class="form-control">
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input formControlName="password" type="password" id="password" class="form-control">
          </div>
          <button type="submit" [disabled]="!myForm.valid" class="btn btn-primary">Sign In</button>
      </form>
      <div *ngIf="error">
        {{error}}
      </div>
    </div>
  `,
  styles: ['.admin{height: 700px} .logged{text-align: right}'],
  // providers:[AuthService]
})
export class LoginComponent implements OnInit {
  myForm:FormGroup;
  logged:boolean=false;
  error:string='';
  constructor(private authService:AuthService, private fb: FormBuilder, private route:Router) {}

  sign() {
    this.authService.signIn(this.myForm.value).catch((error)=>{
      if(error.message!==''){
        this.error=error.message;
      }

    });
    setTimeout(()=> {
      if (this.authService.isAuth()){
        this.error='';
        this.logged=true;
        this.route.navigate(['admin']);
      }
    },1500);
  }

  logOut(){
    this.authService.logOut();
      this.logged=false;
  }


  ngOnInit():any {
    this.myForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

}
