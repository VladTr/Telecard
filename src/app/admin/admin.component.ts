import { Component, OnInit } from '@angular/core';
import {AuthService} from "./auth.service";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-admin',
  template: `
   <div class="admin">
   
    <button class="btn btn-info" (click)="getData()">Начать редактирование</button>
    <form [formGroup]="myForm" (ngSubmit)="send()">
    <hr>
        <div class="form-group">
          <label for="description">Описание</label>
          <textarea rows="10" cols="45" formControlName="description" type="text" id="description" class="form-control">
          </textarea>
        </div>
        <!--<div class="input-group">-->
          <!--<label for="password">Password</label>-->
          <!--<input formControlName="password" type="password" id="password" class="form-control">-->
        <!--</div>-->
        <button type="submit" [disabled]="!myForm.valid" class="btn btn-success">сохранить изменения</button>
    </form>
   </div> 
  `,
  styles: ['.admin{min-height: 700px; margin-top: 30px}']
})
export class AdminComponent implements OnInit {
  description:string;
  myForm:FormGroup;
  constructor(private authService:AuthService, private fb:FormBuilder) { }

  getData(){
    this.authService.dataFromBase().subscribe(
        (data)=>{
          var description=data.description;
          this.myForm = this.fb.group({
            description: [description, Validators.required]
          });
        }
    );
  }

  send(){
    console.log(this.myForm.value);
    this.authService.updateBase(this.myForm.value);
  }


  ngOnInit() {
    this.myForm = this.fb.group({
      description: ['Нажмите: Начать редактирование', Validators.required]
    });
  }

}
