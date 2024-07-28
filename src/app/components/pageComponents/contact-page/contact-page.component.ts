import { Component } from '@angular/core';
import {BasePageComponent} from "../base-page/base-page.component";
import {ContactInfoComponent} from "../../itens/contacts/contact-info/contact-info.component";

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

}
