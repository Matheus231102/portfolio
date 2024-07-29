import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ProjectsRouterService {

  constructor(private router: Router) { }

  public project01(): void {
    this.router.navigate(["project01"])
  }

}
