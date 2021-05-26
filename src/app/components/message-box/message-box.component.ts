import { Component, Input, OnInit } from '@angular/core';

import { ChatService } from '../../services/chat.service';
import { Message } from '../../models/message.model';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.scss'],
})
export class MessageBoxComponent implements OnInit {
  @Input() msgBoxData: Message[] = [];

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {}

  goToChat(msg: Message) {
    console.log({ msg });
    return this.chatService.updateSelectedChat(msg);
  }
}
