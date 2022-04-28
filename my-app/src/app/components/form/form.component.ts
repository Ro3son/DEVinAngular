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
    nome: ['', Validators.required],

    email: ['', Validators.required],

    nomeFilme: ['', Validators.required],

    avaliacao: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  enviar() {
    const value = `Você avaliou o filme ${this.form.value.nomeFilme}.`;
    this.resultado = value;
  }
  onSubmit() {
    console.log(this.form.value);
  }
  ngOnInit(): void { }
}


