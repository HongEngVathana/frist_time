import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginObj: any = {
    userEmail: '',
    password: '',
  };
  constructor(private router: Router) {}
  onLogin() {
    if (
      this.loginObj.userEmail == 'admin@gmail.com' &&
      this.loginObj.password == '1234567'
    ) {
      this.router.navigateByUrl('/products');
    } else {
      alert('Worng Credentials');
    }
  }
}
