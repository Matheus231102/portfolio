import { Component } from '@angular/core';
import {
  ProjectDocumentationComponent
} from "../../pageComponents/project-documentation/project-documentation.component";

@Component({
  selector: 'app-project02',
  standalone: true,
  imports: [
    ProjectDocumentationComponent
  ],
  templateUrl: './project02.component.html',
  styleUrl: './project02.component.css'
})
export class Project02Component {

}
