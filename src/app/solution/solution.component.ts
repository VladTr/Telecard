// компонент отвечающий за вывод информации о комплексах
import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AngularFire} from "angularfire2";
import {LocalService} from "../local.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.css']
})
export class SolutionComponent implements OnInit, OnDestroy {
  private subscription:Subscription;
  id: string;
  solution: any={};
  submenu:any={};
  items1:any;
  items2:any;
  table1:any;
  table2:any={};
  images:any={};
  constructor(private router:Router, private activatedRote:ActivatedRoute, private localService:LocalService, private af:AngularFire){

    // получаем id выбранного комплекса и соответсвующие ему данные
    this.subscription = this.activatedRote.params.subscribe(
        (param:any)=>{
          if(this.id!=param['id']){
            this.id=param['id'];
            this.images={};
            this.table1={};
            this.table2={};
            this.solution={};
            this.solution={};
            this.getServerData();
          }
        }
    );
  }

  // получаем данные по комплексу из firebase
  getServerData(){
    this.localService.getLocal('solutions', this.id).subscribe(
        data=>{
          if (data==null) {this.router.navigateByUrl(''); return}

          this.solution=data;
          this.submenu=data.submenu;
          this.table2=data.table2;
          this.table1=data.table1;
          this.images=data.images;
        }
    );
    this.items1=this.localService.getList('solutions', this.id, 'table1');
    this.items2=this.localService.getList('solutions', this.id, 'table2');
  }


  ngOnInit() {
    // подписываемся на событие изменения языка и при необходимости выводим информацию на заданном языке
    this.localService.getLocale().subscribe(
        data=>this.getServerData()
    );

    this.getServerData();
  }
    ngOnDestroy(){
        this.subscription.unsubscribe();
    }

}
