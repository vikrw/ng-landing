import { Component, Input } from '@angular/core';

import { Message } from './../../models/message.model';

@Component({
  selector: 'app-conversations',
  templateUrl: './conversations.component.html',
  styleUrls: ['./conversations.component.scss'],
})
export class ConversationsComponent {
  @Input() chatSelectionStatus;
  @Input() chatData: Message;
}
