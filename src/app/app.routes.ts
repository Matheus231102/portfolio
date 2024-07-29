import { Routes } from '@angular/router';
import {BasePageComponent} from "./components/pageComponents/base-page/base-page.component";
import {MainPageComponent} from "./components/pageComponents/main-page/main-page.component";
import {ContactPageComponent} from "./components/pageComponents/contact-page/contact-page.component";
import {ProjectPageComponent} from "./components/pageComponents/project-page/project-page.component";
import {TechnologiesPagesComponent} from "./components/pageComponents/technologies-pages/technologies-pages.component";
import {Project01Component} from "./components/documentedProjects/project01/project01.component";

export const routes: Routes = [
  { path: "", component: BasePageComponent },
  { path: "matheusbadia", component: MainPageComponent },
  { path: "contatos", component: ContactPageComponent },
  { path: "projetos", component: ProjectPageComponent },
  { path: "tecnologias", component: TechnologiesPagesComponent },
  { path: "project01", component: Project01Component },
];
