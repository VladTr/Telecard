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

    setLocale(local:string){
        this.locale=local;
        this.observable.next(local);
    }

    getLocale():Observable<any> {
        return this.observable.asObservable();
    }

  getLocalData(loc:string){
    this.locale=loc;
  }

  getSettledLocale(){
      return this.locale;
  }


  getList(core,item,table){
      return this.af.database.list(this.locale+'/'+core+'/'+item+'/'+table+'/rows');
  }

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
