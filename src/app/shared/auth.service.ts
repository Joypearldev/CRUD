import { Injectable } from '@angular/core';
import {AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth : AngularFireAuth, private router : Router) { }

  // login method
  login(email : string, password : string) {
    this.fireauth.signInWithEmailAndPassword(email,password).then( res  => {
      localStorage.setItem('token','true');
      // if email has not been verified it should not be redirected to login componet 
       
      if (res.user?.emailVerified == true){
       this.router.navigate(['/dashboard']);
      } else {
        this.router.navigate(['/verify-email']);
      }
       

    }, err => {
      alert(err.message);
      this.router.navigate(['/login']);
    })
  }

  // register method 
  register(email : string, password : string){
    this.fireauth.createUserWithEmailAndPassword(email, password).then(  res => {
      alert('Registration Successful');
      this.router.navigate(['/login']);
      this.sendEmailForVerification(res.user);
    }, err => {
      alert(err.message);
      this.router.navigate(['/register']);
    })
  }

   // sing out method 
   logout(email : string, password : string){
    this.fireauth.signOut().then( () => {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message);
    })
   }

   // forgot password 
   forgotpassword(email : string){
    // this means sending the email and catching the result
   this.fireauth.sendPasswordResetEmail(email).then( () => {
    // if the email is verified it will take us to verify email page 
    this.router.navigate(['/verify-email']);
   }, err => {
    alert('something went wrong')
   })
   }

   // creating email verification method 

   sendEmailForVerification(user : any){
   user.sendEmailVerification().then((res :any ) => {
    this.router.navigate(['/verify-email']);
    // => means orelse , orelse retun an error message
   }, (err : any) => {
     alert('something went wrong. not able to send mail to your email.')
   })
   }

}
