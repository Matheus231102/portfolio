import { Component } from '@angular/core';
import {BasePageComponent} from "../base-page/base-page.component";
import {WhiteShadowHoverDirective} from "../../../directives/white-shadow-hover.directive";
import {HighlightHoverDirective} from "../../../directives/highlight-hover.directive";
import {BlackTextHoverDirective} from "../../../directives/black-text-hover.directive";
import {RouterService} from "../../../services/router/router.service";
import {DownloadService} from "../../../services/download/download.service";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    BasePageComponent,
    WhiteShadowHoverDirective,
    HighlightHoverDirective,
    BlackTextHoverDirective
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  constructor(protected routerService: RouterService,
              protected downloadService: DownloadService) {}

}
