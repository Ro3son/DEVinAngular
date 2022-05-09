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
    EventEmitterService.get('submit')
      .subscribe(() => {
        alert('E-mail alterado');
        console.log('Alguma coisa deveria estar aqui!');
      });
  }
  // recebeEventoFilho(event: string) {
  //   console.log(event);
  // }
  // ngOnDestroy(){
  //   EventEmitterService.get('submit').unsubscribe();
  // }
}
