import { Component } from '@angular/core';
import {BasePageComponent} from "../base-page/base-page.component";

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [
    BasePageComponent
  ],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent {

}
