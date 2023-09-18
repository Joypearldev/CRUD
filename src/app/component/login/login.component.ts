import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // create a variable
  email : string = '';
  password : string = '';

  constructor(private auth : AuthService, private router : Router){}

  ngOnInit(): void{

  }

  registers(){
    this.router.navigateByUrl('register')
  }

  // login method
  login(){
    if(this.email =='') {
    alert('please enter email');
    return;
  }

    if(this.password =='') {
    alert('please enter password');
    return;
  }

  // login method from auth service
   this.auth.login(this.email,this.password);

   this.email = '';
   this.password = '';
}
}
