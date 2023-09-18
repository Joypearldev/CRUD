import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

   // create a variable
   email : string = '';
   password : string = '';

   constructor(private auth : AuthService){}

   ngOnInit(): void{
 
   }
 
   // login method
   register(){
    console.log("this is a boy ");
     if(this.email =='') {
     alert('please enter email');
     return;
   }
 
     if(this.password =='') {
     alert('please enter password');
     return;
   }
  
   // login method from auth service
   this.auth.register(this.email,this.password);
   this.email = '';
   this.password = '';
  }

}
