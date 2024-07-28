import { Component } from '@angular/core';
import {RouterService} from "../../../services/router/router.service";

@Component({
  selector: 'app-base-page',
  standalone: true,
  imports: [
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
