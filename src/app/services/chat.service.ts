import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Message } from './../models/message.model';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  selectedChat: BehaviorSubject<any> = new BehaviorSubject<any>('');
  selectChatObs = this.selectedChat.asObservable();

  constructor() {}

  updateSelectedChat(msg: Message) {
    return this.selectedChat.next(msg);
  }
}
