import { Component, HostListener, Input } from '@angular/core';

import { ChatService } from '../../services/chat.service';
import { Message } from '../../models/message.model';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.scss'],
})
export class MessageBoxComponent {
  @Input() msgBoxData: Message[] = [];
  innerWidth: number = window.innerWidth;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = event.target.innerWidth;
  }
  constructor(private chatService: ChatService) {}

  goToChat(msg: Message) {
    if (this.innerWidth < 992) {
      console.log('responsive call');
      this.chatService.updateSelectedChat(msg);
      return this.chatService.updateToggleChat(true);
    }
    return this.chatService.updateSelectedChat(msg);
  }
}
