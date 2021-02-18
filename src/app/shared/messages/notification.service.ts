import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class NotificationService {

  constructor() { }

  notifier = new EventEmitter<string>()

  public notify(message: string): void{
    this.notifier.emit(message)
  }

}
