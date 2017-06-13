// компонент отвечаюший за построение главной страницы

import { Component, OnInit } from '@angular/core';
import {LocalService} from "../local.service";
declare const $;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  systems:any={};
  radio:any={};
  modernization:any={};
  appNew:any={};
  constructor(private localService:LocalService) { }

  // получаем данные из firebase для построения главной страницы
  getData(){
    this.localService.getLocal('home', '').subscribe(data=>{
      this.appNew=data.new;
      this.radio=data.radio;
      this.systems=data.systems;
      this.modernization=data.modernization;
    });
  }
  ngOnInit() {
    // ловим изменения языка настройки для ререндеринга
    this.localService.getLocale().subscribe(
     data=>this.getData()
    );

    this.getData();
    $(document).ready(function () {
      $('figcaption').on('click', 'a', function (event) {
        event.preventDefault();
        var id = $(this).attr('href');
        var top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
      });
    });

  }


}

