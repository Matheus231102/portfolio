import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router: Router) {}

  public toHomepage(): void {
    this.router.navigate(["matheusbadia"])
  }

  public toContacts(): void {
    this.router.navigate(["contatos"])
  }

  public toProjects(): void {
    this.router.navigate(["projetos"])
  }

  public toTechnologies(): void {
    this.router.navigate(["tecnologias"])
  }

  public goToLink(link: string) {
    window.open(link, "_blank")
  }
}
