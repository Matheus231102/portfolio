import { Component } from '@angular/core';
import {RouterService} from "../../../services/router/router.service";
import {HighlightHoverDirective} from "../../../directives/highlight-hover.directive";
import {BlackTextHoverDirective} from "../../../directives/black-text-hover.directive";
import {WhiteShadowHoverDirective} from "../../../directives/white-shadow-hover.directive";

@Component({
  selector: 'app-base-page',
  standalone: true,
  imports: [
    HighlightHoverDirective,
    BlackTextHoverDirective,
    WhiteShadowHoverDirective
  ],
  templateUrl: './base-page.component.html',
  styleUrl: './base-page.component.css'
})
export class BasePageComponent {

  constructor(private routerService: RouterService) {}

  toHomepage() {
    this.routerService.toHomepage()
  }

  toContacts() {
    this.routerService.toContacts()
  }

  toProjects() {
    this.routerService.toProjects()
  }

  toTechnologies() {
    this.routerService.toTechnologies()
  }


}
