import { Component, EventEmitter } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { EventEmitterService } from '../services/event-emitter.service';

@Component({
  selector: 'app-informar-email',
  templateUrl: './informar-email.component.html',
  styleUrls: ['./informar-email.component.scss']
})
export class InformarEmailComponent {

  form = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]]
  });

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    console.log(this.form.value);
  }
  submit(value: string) {
    window.localStorage.setItem('email', JSON.stringify(this.form.value));
    EventEmitterService.get('click').emit(value);
  }
}
