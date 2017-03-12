import {Injectable, Inject} from "@angular/core";
import {AuthService} from "./auth.service";
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {Observable} from "rxjs";

Injectable()
export class AuthGuard implements CanActivate{

    constructor(@Inject(AuthService) private authService:AuthService){}

    canActivate(route: ActivatedRouteSnapshot, state:RouterStateSnapshot){
        if(!this.authService.isAuth()){
            window.location.href = "https://www.google.com.ua/#q=telecard-pribor&*";
            return false;
        }
       return this.authService.isAuth();
    }
}
