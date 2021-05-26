import { Component, OnInit } from '@angular/core';

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
  msgBoxData: Message[] = [
    {
      userImage: '../../../assets/images/user.png',
      name: 'Robin Balck',
      latestMessage: `What's about you`,
      msgTime: '3m',
      msgNumber: 2,
    },
    {
      userImage: '../../../assets/images/user.png',
      name: 'Eleanor Pena',
      latestMessage: `Hellom how are you`,
      msgTime: '3m',
    },
    {
      userImage: '../../../assets/images/user.png',
      name: 'Robin Balck',
      latestMessage: `What's about you`,
      msgTime: '3m',
    },
    {
      userImage: '../../../assets/images/user.png',
      name: 'Robin Balck',
      latestMessage: `What's about you`,
      msgTime: '3m',
    },
    {
      userImage: '../../../assets/images/user.png',
      name: 'Robin Balck',
      latestMessage: `What's about you`,
      msgTime: '3m',
    },
    {
      userImage: '../../../assets/images/user.png',
      name: 'Robin Balck',
      latestMessage: `What's about you`,
      msgTime: '3m',
    },
    {
      userImage: '../../../assets/images/user.png',
      name: 'Robin Balck',
      latestMessage: `What's about you`,
      msgTime: '3m',
    },
    {
      userImage: '../../../assets/images/user.png',
      name: 'Robin Balck',
      latestMessage: `What's about you`,
      msgTime: '3m',
    },
    {
      userImage: '../../../assets/images/user.png',
      name: 'Robin Balck',
      latestMessage: `What's about you`,
      msgTime: '3m',
    },
    {
      userImage: '../../../assets/images/user.png',
      name: 'Robin Balck',
      latestMessage: `What's about you`,
      msgTime: '3m',
    },
    {
      userImage: '../../../assets/images/user.png',
      name: 'Robin Balck',
      latestMessage: `What's about you`,
      msgTime: '3m',
    },
    {
      userImage: '../../../assets/images/user.png',
      name: 'Robin Balck',
      latestMessage: `What's about you`,
      msgTime: '3m',
    },
  ];

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    this.getChatBoxStatus();
  }

  // getChatBoxStatus() {
  //   this.chatService.selectChatObs.subscribe((res: Message) => {
  //     if (res) {
  //       console.log({ res });
  //       this.chatSelectionStatus = true;
  //     }
  //   });
  // }

  getChatBoxStatus() {
    this.chatService.selectChatObs.subscribe((res: Message) => {
      if (res) {
        console.log({ res });
        this.chatData = res;
        this.chatSelectionStatus = true;
      }
    });
  }
}
