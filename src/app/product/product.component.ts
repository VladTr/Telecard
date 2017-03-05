import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Subscription} from "rxjs";
import {LocalService} from "../local.service";
import {AngularFire} from "angularfire2";

declare var $;

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
      this.subscription = this.activatedRote.params.subscribe(
          (param:any)=>{
            if(this.id!=param['id']){
              this.id=param['id'];
              this.getServerData();
            }
          }
      );
    }


     getServerData(){
         this.localService.getLocal('products', this.id).subscribe(
             data=>{
                 if (data==null) {this.router.navigateByUrl(''); return}
                 this.product=data;
                 this.application=data.application;
                 this.table1=data.table1;
                 this.table2=data.table2;
                 console.log('call from product-1: '+ this.loc);
             }
         );
         this.localService.getLocal('products', '').subscribe(
             data=>{
                 this.submenu=data.submenu;
                 this.dwl=data.misc;
                 console.log('call from product-2: '+this.loc);
             }
         );
         //this.loc=this.localService.getSettledLocale();
         this.items1=this.af.database.list(this.loc+  '/products/'+this.id+'/table1/rows');
         this.items2=this.af.database.list(this.loc+  '/products/'+this.id+'/table2/rows');
     }

  ngOnInit() {
      // $( document ).ready(function() {
      //     $('table.minTable').mouseover(function () {
      //         alert('tab');
      //     });
      //
      //     $('.myTable3').css('background-color','blue');
      // });


    this.localService.getLocale().subscribe(
        data=>{
            this.loc=data;
            console.log('from subscribe: '+this.loc);
            this.getServerData();
        }
    );
    this.getServerData();
  }

  ngOnDestroy(){
      this.subscription.unsubscribe();
  }

}

