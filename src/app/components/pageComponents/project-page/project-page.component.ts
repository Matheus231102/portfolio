import { Component } from '@angular/core';
import {BasePageComponent} from "../base-page/base-page.component";
import {ProjectComponent} from "../../itens/projects/project/project.component";

@Component({
  selector: 'app-project-page',
  standalone: true,
  imports: [
    BasePageComponent,
    ProjectComponent
  ],
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.css'
})
export class ProjectPageComponent {

}
