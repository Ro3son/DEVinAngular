import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
  // Component class //
export class LoginComponent implements OnInit {
  // Properties / variables //
  title: string = 'Log In'

  form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })
  // Methods //
  onSubmit() {
    console.warn(this.form.value);
  }
  // Lifecycle Hook //
  ngOnInit(): void {
  }
}