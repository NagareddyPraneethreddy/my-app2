import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import { __values } from 'tslib';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public loginForm: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  })
  constructor(private loginService: LoginService, private router:Router) { }

  login() {
    console.log(this.loginForm);

    this.loginService.createLogin(this.loginForm.value).subscribe(
      (data: any) => {
        alert("login SucessFull");
        this.router.navigateByUrl('/dashboard');
        localStorage.setItem('clear',data.token);
      },
      (err: any) => {
        alert("Your Login is not SuccesFull")
      }
    )
  }
}
