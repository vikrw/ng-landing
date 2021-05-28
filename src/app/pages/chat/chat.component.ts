import { Component, HostListener, OnInit } from '@angular/core';

import { Message } from './../../models/message.model';
import { ChatService } from './../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  chatSelectionStatus = false;
  chatData: Message;
  responsiveChatStatus: boolean = false;
  msgBoxData: Message[] = [
    {
      userImage: '../../../assets/images/chat-user.png',
      name: 'Robin Balck',
      latestMessage: `What's about you`,
      msgTime: '3m',
      msgNumber: 2,
    },
    {
      userImage: '../../../assets/images/chat-user.png',
      name: 'Eleanor Pena',
      latestMessage: `Hellom how are you`,
      msgTime: '3m',
    },
    {
      userImage: '../../../assets/images/chat-user.png',
      name: 'Robin Balck one',
      latestMessage: `What's about you`,
      msgTime: '3m',
    },
    {
      userImage: '../../../assets/images/chat-user.png',
      name: 'Robin Balck',
      latestMessage: `What's about you`,
      msgTime: '3m',
    },
    {
      userImage: '../../../assets/images/chat-user.png',
      name: 'Robin Balck two',
      latestMessage: `What's about you`,
      msgTime: '3m',
    },
    {
      userImage: '../../../assets/images/chat-user.png',
      name: 'Robin Balck',
      latestMessage: `What's about you`,
      msgTime: '3m',
    },
    {
      userImage: '../../../assets/images/chat-user.png',
      name: 'Robin Balck junior',
      latestMessage: `What's about you`,
      msgTime: '3m',
    },
    {
      userImage: '../../../assets/images/chat-user.png',
      name: 'Robin Balck',
      latestMessage: `What's about you`,
      msgTime: '3m',
    },
    {
      userImage: '../../../assets/images/chat-user.png',
      name: 'Robin White',
      latestMessage: `What's about you`,
      msgTime: '3m',
    },
    {
      userImage: '../../../assets/images/chat-user.png',
      name: 'Robin Balck',
      latestMessage: `What's about you`,
      msgTime: '3m',
    },
    {
      userImage: '../../../assets/images/chat-user.png',
      name: 'Robin Balck',
      latestMessage: `What's about you`,
      msgTime: '3m',
    },
    {
      userImage: '../../../assets/images/chat-user.png',
      name: 'Robin Balck',
      latestMessage: `What's about you`,
      msgTime: '3m',
    },
  ];
  innerWidth: number = window.innerWidth;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = event.target.innerWidth;
    console.log('iw', this.innerWidth);
  }
  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    this.getChatBoxStatus();
    this.getToggleResponsiveChat();
  }

  getChatBoxStatus() {
    this.chatService.selectChatObs.subscribe((res: Message) => {
      if (res) {
        this.chatData = res;
        this.chatSelectionStatus = true;
      }
    });
  }

  getToggleResponsiveChat() {
    this.chatService.toggleChatAreaObs.subscribe(
      (res) => (this.responsiveChatStatus = res)
    );
  }
}
