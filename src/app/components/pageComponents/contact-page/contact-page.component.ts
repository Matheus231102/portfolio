import { Component } from '@angular/core';
import {BasePageComponent} from "../base-page/base-page.component";
import {ContactInfoComponent} from "../../itens/contacts/contact-info/contact-info.component";
import {ProfileConstants} from "../../../constants/ProfileConstants";
import {HighlightHoverDirective} from "../../../directives/highlight-hover.directive";
import {ContactService} from "../../../services/contact/contact.service";

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [
    BasePageComponent,
    ContactInfoComponent,
    HighlightHoverDirective
  ],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent {

  protected readonly ProfileConstants = ProfileConstants;

  constructor(protected contactService: ContactService) {}

}
