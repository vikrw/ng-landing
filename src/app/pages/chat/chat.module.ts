import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatComponent } from './chat.component';
import { ChatRoutingModule } from './chat-routing.module';
import { MessageBoxComponent } from '../../components/message-box/message-box.component';
import { ConversationsComponent } from '../../components/conversations/conversations.component';
import { NoChatComponent } from '../../components/no-chat/no-chat.component';

@NgModule({
  imports: [ChatRoutingModule, CommonModule],
  declarations: [
    ChatComponent,
    MessageBoxComponent,
    ConversationsComponent,
    NoChatComponent,
  ],
})
export class ChatModule {}
