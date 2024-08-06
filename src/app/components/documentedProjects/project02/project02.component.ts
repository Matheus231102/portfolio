import { Component } from '@angular/core';
import {GithubLinkComponent} from "../../itens/projects/github-link/github-link.component";
import {
    ProjectDocumentationComponent
} from "../../pageComponents/project-documentation/project-documentation.component";

@Component({
  selector: 'app-project02',
  standalone: true,
    imports: [
        GithubLinkComponent,
        ProjectDocumentationComponent
    ],
  templateUrl: './project02.component.html',
  styleUrl: './project02.component.css'
})
export class Project02Component {
  project02Link: string = "https://github.com/Matheus231102/calculate2-front";

}
