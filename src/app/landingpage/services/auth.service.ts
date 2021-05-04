import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { of, Observable,from } from 'rxjs';
import { Auth, Hub } from 'aws-amplify';
import { CognitoUser } from 'amazon-cognito-identity-js';
import { SignUpParams } from './signupparams';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /**
   * BehaviorSubject
   */
   public loggedIn: boolean;

   /**
    * constructor
    * @param router
    */
   constructor(private toastr: ToastrService) {
    Hub.listen('auth', (data) => {
      if(data.payload.event==='signUp_failure'){
        this.openToast(data.payload.data.message,data.payload.message,'error');
      }
    });
   }

   openToast(msg,title,typeLog='warning') {
    const toastrConfig = this.toastr.toastrConfig;
    const inserted = this.toastr.show(
      msg,
      title,
      this.toastr.toastrConfig,
      'toast-'+typeLog
    );
    return inserted;
  }

   /**
    * get authenticat state
    */
   public isAuthenticated(): Observable<boolean> {
     return from(Auth.currentAuthenticatedUser())
       .pipe(
         map(result => {
           return true;
         }),
         catchError(error => {
           return of(false);
         })
       );
   }

   /**
    * signout
    */
   async signOut() {
     await from(Auth.signOut())
       .subscribe(
         result => {
           this.loggedIn = false;
         },
         error => console.log(error)
       );
   }

   signIn(username: string, password: string):Promise<CognitoUser|any> {
     return new Promise((resolve,reject) => {
       Auth.signIn(username,password)
       .then((user: CognitoUser|any) => {
         this.loggedIn = true;
         resolve(user);
       }).catch((error: any) => reject(error));
     });
   }

   signUp(user: SignUpParams):Promise<CognitoUser|any> {
     return new Promise((resolve,reject) => {
       Auth.signUp(user)
       .then((user: CognitoUser|any) => {
         this.loggedIn = true;
         resolve(user);
       }).catch((error: any) => reject(error));
     });
   }

   confirmSignUp(username:string,code:string):Promise<CognitoUser|any> {
     return new Promise((resolve,reject) => {
       Auth.confirmSignUp(username,code)
       .then((user: CognitoUser|any) => {
         this.loggedIn = true;
         resolve(user);
       }).catch((error: any) => reject(error));
     });
   }

   resendSignUp(username:string):Promise<CognitoUser|any> {
     return new Promise((resolve,reject) => {
       Auth.resendSignUp(username)
       .then((user: CognitoUser|any) => {
         this.loggedIn = true;
         resolve(user);
       }).catch((error: any) => reject(error));
     });
   }

   completeNewPassword(user,password):Promise<CognitoUser|any> {
     return new Promise((resolve,reject) => {
       Auth.completeNewPassword(user,password)
       .then((user: CognitoUser|any) => {
         this.loggedIn = true;
         resolve(user);
       }).catch((error: any) => reject(error));
     });
   }
}
