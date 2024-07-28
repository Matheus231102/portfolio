import {Component, ViewChild} from '@angular/core';
import {BasePageComponent} from "../base-page/base-page.component";
import {ContactInfoComponent} from "../../itens/contacts/contact-info/contact-info.component";
import {ProfileConstants} from "../../../constants/ProfileConstants";
import {HighlightHoverDirective} from "../../../directives/highlight-hover.directive";
import {ContactService} from "../../../services/contact/contact.service";
import {
  ContactNotificationPopupComponent
} from "../../itens/contacts/contact-notification-popup/contact-notification-popup.component";

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [
    BasePageComponent,
    ContactInfoComponent,
    HighlightHoverDirective,
    ContactNotificationPopupComponent
  ],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent {

  @ViewChild("notificationElement") notificationElement!: ContactNotificationPopupComponent;

  protected readonly ProfileConstants = ProfileConstants;
  public message: string = 'Testando aplicação'

  constructor(protected contactService: ContactService) {}

  copyEmail(){
    this.contactService.copyEmail();
    this.notificationElement.changeMessage("E-mail copiado com successo")
    this.notificationElement.showNotification()
  }

  copyNumber() {
    this.contactService.copyNumber();
    this.notificationElement.changeMessage("Número copiado com successo")
    this.notificationElement.showNotification()
  }

}
