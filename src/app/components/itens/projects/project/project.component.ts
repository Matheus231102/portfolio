import {Component, Input} from '@angular/core';
import {HighlightHoverDirective} from "../../../../directives/highlight-hover.directive";

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [
    HighlightHoverDirective
  ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  @Input("projectTitle") projectTitle: string = '';
  @Input("usedTechnologies") usedTechnologies: string = '';

}
