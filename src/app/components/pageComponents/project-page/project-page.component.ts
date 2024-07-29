import { Component } from '@angular/core';
import {BasePageComponent} from "../base-page/base-page.component";
import {ProjectComponent} from "../../itens/projects/project/project.component";
import {ProjectsRouterService} from "../../../services/router/projects-router.service";
import {HighlightHoverDirective} from "../../../directives/highlight-hover.directive";
import {BlackTextHoverDirective} from "../../../directives/black-text-hover.directive";

@Component({
  selector: 'app-project-page',
  standalone: true,
  imports: [
    BasePageComponent,
    ProjectComponent,
    HighlightHoverDirective,
    BlackTextHoverDirective
  ],
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.css'
})
export class ProjectPageComponent {

  constructor(protected projectsRouterService: ProjectsRouterService) {}
}
