import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Message } from './../models/message.model';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  selectedChat: BehaviorSubject<Message | ''> = new BehaviorSubject<
    Message | ''
  >('');
  selectChatObs = this.selectedChat.asObservable();
  toggleChatArea: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  toggleChatAreaObs = this.toggleChatArea.asObservable();

  constructor() {}

  updateSelectedChat(msg: Message) {
    return this.selectedChat.next(msg);
  }

  updateToggleChat(option: boolean) {
    return this.toggleChatArea.next(option);
  }
}
