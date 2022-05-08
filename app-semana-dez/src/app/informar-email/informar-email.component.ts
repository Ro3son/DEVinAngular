import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { EventEmitterService } from '../services/event-emitter.service';

@Component({
  selector: 'app-informar-email',
  templateUrl: './informar-email.component.html',
  styleUrls: ['./informar-email.component.scss']
})
export class InformarEmailComponent implements OnInit {

  @Output() changeEmail = new EventEmitter<string>();

  form = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]]
  });

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    console.log(this.form.value);
  }
  submit() {
    window.localStorage.setItem('email', JSON.stringify(this.form.value));
    // this.changeEmail.emit(this.form.value);
    EventEmitterService.get('submit').emit('');
  }
  // submitEvent(value: string) {
  //   EventEmitterService.get('').emit();
  // }
  ngOnInit(): void {
  }

}
