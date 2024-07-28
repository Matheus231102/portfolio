import {Component, Input} from '@angular/core';
import {HighlightHoverDirective} from "../../../../directives/highlight-hover.directive";

@Component({
  selector: 'app-technology',
  standalone: true,
  imports: [
    HighlightHoverDirective
  ],
  template: `
    <div class="container" highlightHover>
      <div class="tech-name-container">
        <h4 class="tech-name">{{ technologyName }}</h4>
      </div>
      <div class="tech-image-container">
        <img class="tech-image" src="{{ source }}" alt="{{ altDescription }}">
      </div>
    </div>
  `,
  styles: `
    .container {
      background-color: rgba(241, 241, 241, 0.29);
      border-radius: 1em;
      width: 10em;
      height: 12em;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .container:hover {
      .tech-name {
        color: #000000;
      }
    }

    .tech-name-container {
      margin: 1em 0;
    }

    .tech-name {
      color: #f1f1f1;
      text-align: center;
    }

    .tech-image-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 6em;
      height: 6em;
    }

    .tech-image {
      height: 100%;
    }

  `
})
export class TechnologyComponent {
  @Input("technologyName") technologyName: string = "";
  @Input("source") source: string = "";
  @Input("altDescription") altDescription = "";
  @Input() widthBlock!: boolean;

}
