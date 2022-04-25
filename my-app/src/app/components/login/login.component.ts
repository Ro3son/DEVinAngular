import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  title: string = 'Log In'
  email: string = 'E-mail:'
  password: string = 'Senha:'
  content: string = 'Log In'

  form = new FormGroup({
    email: new FormControl(''),
    password:  new FormControl(''),
  });
  onSubmit() {
    console.warn(this.form.value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
