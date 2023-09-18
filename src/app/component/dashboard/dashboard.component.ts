import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private auth : AuthService, private router : Router) {}
  ngOnInIt(): void {

  }
  register() {
   this.router.navigate(['/login']);
  }
}
