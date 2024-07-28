import {Component, Input} from '@angular/core';
import {HighlightHoverDirective} from "../../../../directives/highlight-hover.directive";

@Component({
  selector: 'app-contact-info',
  standalone: true,
  imports: [
    HighlightHoverDirective
  ],
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
  @Input("descriptionTitle") descriptionTitle: string = "";

}
