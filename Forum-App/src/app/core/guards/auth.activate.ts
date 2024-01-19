import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/user/user.service';

@Injectable({ providedIn: 'root' })
export class AuthActivate implements CanActivate {
  constructor(private userService: UserService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return this.userService.isLogged;
  }
}

// import { Injectable, inject } from '@angular/core';
// import {
//   ActivatedRouteSnapshot,
//   CanActivateFn,
//   RouterStateSnapshot,
// } from '@angular/router';
// import { UserService } from 'src/app/user/user.service';

// @Injectable({ providedIn: 'root' })
// class Auth {
//   constructor(private userService: UserService) {}

//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): boolean {
//     return this.userService.isLogged;
//   }
// }

// export const isAuth: CanActivateFn = (
//   route: ActivatedRouteSnapshot,
//   state: RouterStateSnapshot
// ): boolean => {
//   return inject(Auth).canActivate(route, state);
// };
