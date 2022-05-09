import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from '../services/event-emitter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    EventEmitterService.get('click').subscribe((value) => {
        alert('E-mail alterado!');
        console.log(value);
      });
  }
  // recebeEventoFilho(event: string) {
  //   console.log(event);
  // }
  // ngOnDestroy(){
  //   EventEmitterService.get('submit').unsubscribe();
  // }
}
