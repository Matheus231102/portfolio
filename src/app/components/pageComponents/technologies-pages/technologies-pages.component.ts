import { Component } from '@angular/core';
import {BasePageComponent} from "../base-page/base-page.component";

@Component({
  selector: 'app-technologies-pages',
  standalone: true,
  imports: [
    BasePageComponent
  ],
  templateUrl: './technologies-pages.component.html',
  styleUrl: './technologies-pages.component.css'
})
export class TechnologiesPagesComponent {

}
