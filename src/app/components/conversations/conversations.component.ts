import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Message } from './../../models/message.model';
import { ChatService } from './../../services/chat.service';

@Component({
  selector: 'app-conversations',
  templateUrl: './conversations.component.html',
  styleUrls: ['./conversations.component.scss'],
})
export class ConversationsComponent {
  @Input() chatSelectionStatus;
  @Input() chatData: Message;
  msgToSend = new FormControl('');
  msgSent: String[] = [];

  constructor(private chatService: ChatService) {}

  sendMessage(value) {
    if (!value) {
      return;
    }
    this.msgSent.push(value);
    this.msgToSend.reset();
  }

  goToMsgBox() {
    return this.chatService.updateToggleChat(false);
  }
}
