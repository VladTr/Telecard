//компонент отвечающий за отображение информации о товаре
import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Subscription} from "rxjs";
import {LocalService} from "../local.service";
import {AngularFire} from "angularfire2";

declare const $;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnDestroy {
  private subscription:Subscription;
  id: string;
  product:any={};
  submenu:any={};
  table1:any={};
  table2:any={};
  items1:any;
  items2:any;
  dwl:any={};
  application:any={};

  @Input() loc:any;

  constructor(private router:Router, private activatedRote:ActivatedRoute,
  private localService:LocalService, private af:AngularFire) {
      this.loc=this.localService.getSettledLocale();
      // получаем данные по товару по его id
      this.subscription = this.activatedRote.params.subscribe(
          (param:any)=>{
            if(this.id!=param['id']){
              this.id=param['id'];
              this.getServerData();
            }
          }
      );
    }

    // прочитываем данные от товаре из firebase
     getServerData(){
         this.localService.getLocal('products', this.id).subscribe(
             data=>{
                 if (data==null) {this.router.navigateByUrl(''); return}
                 this.product=data;
                 this.application=data.application;
                 this.table1=data.table1;
                 this.table2=data.table2;
             }
         );
         this.localService.getLocal('products', '').subscribe(
             data=>{
                 this.submenu=data.submenu;
                 this.dwl=data.misc;
             }
         );

         this.items1=this.af.database.list(this.loc+  '/products/'+this.id+'/table1/rows');
         this.items2=this.af.database.list(this.loc+  '/products/'+this.id+'/table2/rows');
     }

  ngOnInit() {
    // отображаем данные по товару в зависимости от изменившегося языка
    this.localService.getLocale().subscribe(
        data=>{
            this.loc=data;
            this.getServerData();
        }
    );
    this.getServerData();
  }

  ngOnDestroy(){
      this.subscription.unsubscribe();
  }

}

