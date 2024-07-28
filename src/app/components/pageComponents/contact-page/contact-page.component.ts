import { Component } from '@angular/core';
import {BasePageComponent} from "../base-page/base-page.component";
import {ContactInfoComponent} from "../../itens/contacts/contact-info/contact-info.component";
import {ProfileConstants} from "../../../constants/ProfileConstants";

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [
    BasePageComponent,
    ContactInfoComponent
  ],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent {

    protected readonly ProfileConstants = ProfileConstants;

  sendEmail() {
    window.open(`mailto:${this.ProfileConstants.email}`);
  }

  sendMessage() {
    window.open(ProfileConstants.whatssapLink, "_blank")
  }

  copyEmail() {
    navigator.clipboard.writeText(ProfileConstants.email)
  }

  copyNumber() {
    navigator.clipboard.writeText(ProfileConstants.number)
  }

  goToGithub() {
    window.open(ProfileConstants.githubLink, "_blank")
  }

  goToLinkedin() {
    window.open(ProfileConstants.linkedinLink, "_blank")
  }
}
