import { Component } from '@angular/core';
import {BasePageComponent} from "../base-page/base-page.component";

@Component({
  selector: 'app-base-content-page',
  standalone: true,
    imports: [
        BasePageComponent
    ],
  templateUrl: './base-content-page.component.html',
  styleUrl: './base-content-page.component.css'
})
export class BaseContentPageComponent {

}
