import {Component, Input} from '@angular/core';
import {BasePageComponent} from "../base-page/base-page.component";

@Component({
  selector: 'app-project-documentation',
  standalone: true,
  imports: [
    BasePageComponent
  ],
  templateUrl: './project-documentation.component.html',
  styleUrl: './project-documentation.component.css'
})
export class ProjectDocumentationComponent {
  @Input("projectTitle") projectTitle!: string;
  @Input("projectDescription") projectDescription!: string;

}
