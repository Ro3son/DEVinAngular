import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-informar-email',
  templateUrl: './informar-email.component.html',
  styleUrls: ['./informar-email.component.scss']
})
export class InformarEmailComponent implements OnInit {

  resultado: any;

  form = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]]
  });

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    console.log(this.form.value);
  }
  submit() {
    let submeter = this.form.value;
    this.resultado = submeter;
  }
  ngOnInit(): void {
  }

}
