import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-contact-info',
  standalone: true,
  imports: [],
  templateUrl: './contact-info.component.html',
  styles: `
    .centralized {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .container {
      background-color: rgba(241, 241, 241, 0.68);
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      height: 6em;
      border-radius: 1em;
    }

    .contact-logo-container {
      height: 6em;
      width: 6em;
    }

    .contact-desc-container {
      width: calc(100% - 6em);
    }

    .contact-info-title {
      margin-top: 5px;
      text-align: center;
      color: black;
      font-size: 20px;
      font-weight: bold;
    }

    .info-logo {
      height: 5em;
      padding: 0.5em;
    }
  `
})
export class ContactInfoComponent {
  @Input("src") src: string = "";
  @Input("title") title: string = "";

}
