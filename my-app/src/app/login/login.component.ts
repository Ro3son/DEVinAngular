import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
// Component class //
export class LoginComponent implements OnInit {
  // Create properties //
  title: string = 'Log In'

  form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })
  
  onSubmit() {
    console.warn(this.form.value);
  }
  
  ngOnInit(): void {
  }
}