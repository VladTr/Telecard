import { Component, OnInit } from '@angular/core';
import {LocalService} from "../local.service";
declare var $;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  systems:any={};
  radio:any={};
  modernization:any={};
  new:any={};
  constructor(private localService:LocalService) { }

  getData(){
    this.localService.getLocal('home', '').subscribe(data=>{
      this.new=data.new;
      this.radio=data.radio;
      this.systems=data.systems;
      this.modernization=data.modernization;
    });
  }
  ngOnInit() {
    //window['MyNamespace']=true;
    //window['my']=true;

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

