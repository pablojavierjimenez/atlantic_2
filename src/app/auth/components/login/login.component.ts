import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  private userEmail = '';
  private userPassword = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onSubmit(loginForm: NgForm): void {
    console.log(loginForm.value);

    const userData = loginForm.value;

    const loginObservable = {
      next: (data: any) => console.log('user Logged SUCCESS', data),
      error: (err: any) => console.log('user Logged ERROR', err),
    };

    this.authService.login(userData).subscribe(loginObservable);
  }
}
