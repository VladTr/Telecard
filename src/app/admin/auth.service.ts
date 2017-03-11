import { Injectable } from '@angular/core';
import {User} from "./user";
import {AngularFire} from "angularfire2";
declare var firebase:any;

@Injectable()
export class AuthService {
  errorMessage:string;
  constructor(private af:AngularFire) { }

  signIn(user:User){
    return firebase.auth().signInWithEmailAndPassword(user.email, user.password);
  }

  logOut(){
    if(this.isAuth()){
      firebase.auth().signOut().then(function() {
        console.log('you signout');
      }).catch(function(error) {
        console.log(error);
      });
    }
  }

  isAuth(){
    if(typeof(firebase)=='undefined') return false;
    console.log(typeof firebase);
    var user = firebase.auth().currentUser;
    if (user) {
      console.log('User is signed in.');
      return true;
    } else {
      console.log('No user is signed in');
      return false;
    }
  }

  dataFromBase() {
    return this.af.database.object('/ru/products/product-ta01');
  }

  updateBase(data:string){
    this.af.database.object('/ru/products/product-ta01').update(data);
  }

}
