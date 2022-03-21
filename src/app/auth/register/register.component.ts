import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/auth/login.service';

export class User{
  id: any;
  username: any;
  password: any;
  role: any;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = {
    id: 0,
    username: '',
    password: '',
    role: 'user'
  }

  submitted = false;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  newUser(): void {
    const data = {
      username: this.user.username,
      password: this.user.password,
      role: this.user.role
    };

    this.loginService.addUser(data).subscribe(
      (response) => {
        console.log(response);
        this.submitted = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
