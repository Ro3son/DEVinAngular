import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {

  private static emitters: {
    [submit: string]: EventEmitter<string>
  } = {}
  static get(submit: string): EventEmitter<string> {
    if (!this.emitters[submit])
      this.emitters[submit] = new EventEmitter<string>();
    return this.emitters[submit];
  }

  constructor() { }
}
