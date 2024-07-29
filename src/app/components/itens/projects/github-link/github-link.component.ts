import {Component, Input} from '@angular/core';
import {RouterService} from "../../../../services/router/router.service";
import {HighlightHoverDirective} from "../../../../directives/highlight-hover.directive";

@Component({
  selector: 'app-github-link',
  standalone: true,
  imports: [
    HighlightHoverDirective
  ],
  templateUrl: './github-link.component.html',
  styleUrl: './github-link.component.css'
})
export class GithubLinkComponent {
  @Input("link") link!: string;

  constructor(private routerService: RouterService) {}

  toRepositoryPage() {
    this.routerService.goToLink(this.link)
  }

}
