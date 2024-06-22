import { Routes } from '@angular/router';
import {InitialPageComponent} from "./components/pageComponents/initial-page/initial-page.component";
import {ContactPageComponent} from "./components/pageComponents/contact-page/contact-page.component";

export const routes: Routes = [
  { path: "", component: InitialPageComponent },
  { path: "contact", component: ContactPageComponent },
];
