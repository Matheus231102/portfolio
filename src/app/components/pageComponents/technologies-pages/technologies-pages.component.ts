import { Component } from '@angular/core';
import {BasePageComponent} from "../base-page/base-page.component";
import {TechnologyComponent} from "../../itens/technologies/technology/technology.component";

@Component({
  selector: 'app-technologies-pages',
  standalone: true,
  imports: [
    BasePageComponent,
    TechnologyComponent
  ],
  templateUrl: './technologies-pages.component.html',
  styleUrl: './technologies-pages.component.css'
})
export class TechnologiesPagesComponent {

}
