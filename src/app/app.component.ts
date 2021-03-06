import {Component, OnInit} from '@angular/core';
import {LocalService} from "./local.service";
import {AngularFire, FirebaseListObservable} from "angularfire2";
import {firebaseConfig} from "../environments/firebase.config";
import database = firebase.database;
import {Title} from "@angular/platform-browser";

//
declare const $:any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // задаем язык по умолчанию
  loc:string='ru';
  items:FirebaseListObservable<any[]>;
  solutions:FirebaseListObservable<any[]>;
  products:any={};
  contentMain:any={};
  submenu:any={};
  submenuAbout:any={};
  appFooter:any={};
  constructor(private af:AngularFire, private localService:LocalService, private titleService: Title){}

  // метод задающий новый язык по нажатию
  toggleLanguage(lang){
    if(this.loc==lang){
        return;
    } else{
        this.loc=lang;
        this.localService.setLocale(this.loc);
        this.getData();
    }
  }

  // прочитываем / перепрочитываем данные из firebase
  getData(){

      this.localService.getLocal('about', '').subscribe(data=>{
          this.submenuAbout=data.submenu;
      });

      this.localService.getLocal('app', '').subscribe(data=>{
          this.contentMain=data.menu;
          this.submenu=data.submenu;
          this.appFooter=data.footer;
      });
      this.items=this.af.database.list(firebaseConfig.databaseURL+'/'+this.loc+'/products');
      this.solutions=this.af.database.list(firebaseConfig.databaseURL+'/'+this.loc+'/solutions');

      if(this.loc=='ru'){
          this.titleService.setTitle('Телекарт-Прибор');
      }
      if(this.loc=='en'){
          this.titleService.setTitle('Telecard-Pribor');
      }
      if(this.loc=='ua'){
          this.titleService.setTitle('Телекарт-Прилад');
      }

  }

  ngOnInit(){
      let doc_w = $(document).width();
      $( window ).resize(function() {
          doc_w = $(document).width();
      });

      $('a#prevent1, a#prevent2').click(function( event ) {
          // alert(doc_w);
          if(doc_w>768){
              event.preventDefault();
          }
      });

      $('li.dropdown').mouseover(function () {
          $(this).find('a.dropdown-toggle').css('color','black');
      }).mouseleave(function () {
          $('a.dropdown-toggle').css('color','');
      });

      this.getData();
  }


}


