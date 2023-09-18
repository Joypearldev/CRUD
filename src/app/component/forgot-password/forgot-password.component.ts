import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  email : string = '';


  constructor(private auth : AuthService){}


  ngOnInIt(): void{
  }

  forgotpassword(){
   // calling the function from auth srvices 
   this.auth.forgotpassword(this.email);
   this.email =''; 
  }
}
