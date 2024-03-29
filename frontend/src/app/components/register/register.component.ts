import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  name: String = '';
  password: String = '';
  email: String = '';

  constructor(
    private authService:AuthService,
    private router:Router) { }

  ngOnInit(): void {
  }

  onRegister() {
    const user = {
      name: this.name,
      password: this.password,
      email: this.email
    }

    this.authService.register(user).subscribe(data => {
      console.log('data', data);
    })
  }

  redirectLogin() {
    this.router.navigate(['/login']);
  }

  loginAfterRegister() {
    let user = {
      email: this.email,
      password: this.password
    }

    this.authService.login(user).subscribe(data => {
      if(data.success){
        this.authService.storeUserData(data.token, data._id)
        this.router.navigate(['/']);
      } else {
        this.router.navigate(['/login']);
      }
    }) 
  }
}
