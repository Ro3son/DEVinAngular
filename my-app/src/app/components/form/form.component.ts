import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl } from '@angular/forms';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public title: string = 'Sistema de Avaliação';

  public resultado: any;

  public form = this.fb.group({
    nome: ['', [Validators.required, Validators.minLength(3)]],

    email: ['', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],

    nomeFilme: ['', [Validators.required, Validators.minLength(3)]],

    avaliacao: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]]
  });

  constructor(private fb: FormBuilder) { }

  submit() {
    const filmeAvaliado = `Você avaliou o filme ${this.form.value.nomeFilme}.`;
    this.resultado = filmeAvaliado;
    // this.form.reset();
  }
  reset() {
    this.resultado = '';
  }
  onSubmit() {
    console.log(this.form.value);
  }
  ngOnInit(): void { }
}


