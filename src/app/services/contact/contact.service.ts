import { Injectable } from '@angular/core';
import {ProfileConstants} from "../../constants/ProfileConstants";

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private ProfileConstants = new ProfileConstants();

  sendEmail() {
    window.open(`mailto:${ProfileConstants.email}`);
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
