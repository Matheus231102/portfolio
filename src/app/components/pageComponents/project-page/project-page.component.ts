import { Component } from '@angular/core';
import {BasePageComponent} from "../base-page/base-page.component";

@Component({
  selector: 'app-project-page',
  standalone: true,
  imports: [
    BasePageComponent
  ],
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.css'
})
export class ProjectPageComponent {

}
