import { Component } from '@angular/core';
import {
  ProjectDocumentationComponent
} from "../../pageComponents/project-documentation/project-documentation.component";

@Component({
  selector: 'app-project01',
  standalone: true,
  imports: [
    ProjectDocumentationComponent
  ],
  templateUrl: './project01.component.html',
  styleUrl: './project01.component.css'
})
export class Project01Component {

}
