import { Component } from '@angular/core';
import {BasePageComponent} from "../base-page/base-page.component";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    BasePageComponent
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}
