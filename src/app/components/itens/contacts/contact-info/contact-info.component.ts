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
      background-color: rgba(241, 241, 241, 0.29);
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      height: 6.5em;
      border-radius: 1em;
    }

    .container:hover {
      -webkit-box-shadow: #FFF 0 -1px 4px, #00a6ff 0 -2px 10px, #00ffff 0 -10px 20px, 5px 5px 15px 5px rgba(0, 0, 0, 0.13);
      box-shadow: #FFF 0 -1px 4px, #389ec9 0 -2px 10px, #258a72 0 -10px 20px, 5px 5px 15px 5px rgba(0, 0, 0, 0.13);
      background: #F5F5F5;

      .contact-info-title {
        color: black;
      }

      .contact-info-desc {
        color: black;
      }
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
      color: #f1f1f1;
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
