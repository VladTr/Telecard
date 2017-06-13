import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';
import {firebaseConfig} from "../environments/firebase.config";
import {Subject, Observable} from "rxjs";
import {AngularFire} from "angularfire2";


@Injectable()
export class LocalService {

  constructor(private http:Http, private af:AngularFire) { }
  locale:string='ru';

  observable=new Subject();

    // устанавливаем язык
    setLocale(local:string){
        this.locale=local;
        this.observable.next(local);
    }

    // подписываемся на данный метод для реактивного рендеринга компонентов при смене языка
    getLocale():Observable<any> {
        return this.observable.asObservable();
    }

  getLocalData(loc:string){
    this.locale=loc;
  }

  // вспомогательный метод - возвращает текущий язык
  getSettledLocale(){
      return this.locale;
  }

  // метод получения списочных данных firebase
  getList(core,item,table){
      return this.af.database.list(this.locale+'/'+core+'/'+item+'/'+table+'/rows');
  }

  // метод получения объектных данных firebase
  getLocal(core, product){
      if (product==''){
          return this.http.get(firebaseConfig.databaseURL+'/'+ this.locale +'/' + core + '.json')
              .map((response:Response)=>response.json());
      }else{
          return this.http.get(firebaseConfig.databaseURL+'/'+ this.locale +'/' + core + '/' + product +'.json')
              .map((response:Response)=>response.json());
      }
  }

}
