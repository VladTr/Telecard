import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {LocalService} from "../local.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  private subscription:Subscription;
  id:string;
  tour:string='';
  technology:string='';
  center:string='';
  cooperate:string='';
  contacts:string='';
  history:any={};

  constructor(private activatedRote:ActivatedRoute, private localService:LocalService) {
    this.subscription = this.activatedRote.params.subscribe(
        (param:any)=>{
          if(this.id!=param['id']){
            this.id=param['id'];
            this.getData();
          }
        }
    );
  }

  getData(){
    this.localService.getLocal('about', '').subscribe(data=>{
      this.history=data.history;
      this.tour=data.tour;
      this.technology=data.technology;
      this.center=data.center;
      this.cooperate=data.cooperate;
      this.contacts=data.contacts;
    });
  }


  ngOnInit() {

    this.localService.getLocale().subscribe(
      data=>this.getData()
    );

    this.getData();
  }

}
