import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
  // Component class //
export class LoginComponent implements OnInit {
  // Properties / variables //

  title: string = 'Log In'

  constructor(private fb: FormBuilder) {}

  form = this.fb.group({
    email: ['', Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[az]{2,4}$")],  // regex string and numbers
    password: ['', Validators.required, Validators.pattern("^\d{10}$")] // regex 10 numbers only
  })
  
  // Methods //
  onSubmit() {
    console.warn(this.form.value);
  }
  // Lifecycle Hook
  ngOnInit(): void {
  }
}