import { Component } from '@angular/core';
import {
  ProjectDocumentationComponent
} from "../../pageComponents/project-documentation/project-documentation.component";
import {GithubLinkComponent} from "../../itens/projects/github-link/github-link.component";

@Component({
  selector: 'app-project01',
  standalone: true,
  imports: [
    ProjectDocumentationComponent,
    GithubLinkComponent
  ],
  templateUrl: './project01.component.html',
  styleUrl: './project01.component.css'
})
export class Project01Component {
  project01Link: string = "https://github.com/Matheus231102/spring_task";

}
