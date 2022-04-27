import { Component } from '@angular/core';
// import { FormGroup, FormControl } from '@angular/forms';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  public title: string = 'Sistema de Avaliação';

  public form = this.fb.group({
    nome: ['', Validators.required],

    email: ['', Validators.required],

    nomeFilme: ['', Validators.required],

    avaliacao: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  enviar() {
    console.log(`Você avaliou o filme${this.form}`);
  }
  onSubmit() {
    console.log(this.form.value);
  }
}


