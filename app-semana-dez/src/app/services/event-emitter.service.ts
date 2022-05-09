import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {

  private static emitters: {
    [click: string]: EventEmitter<any>
  } = {}
  static get(click: string): EventEmitter<any> {
    if (!this.emitters[click]) // Se o evento não existir cria o evento //
      this.emitters[click] = new EventEmitter<any>(); // Se existir retorna o evento //
    return this.emitters[click];
  }

  constructor() { }
}
