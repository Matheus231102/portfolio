import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  constructor() {}

  downloadCurriculum() {
    const curriculumPath = `assets/curriculo/curriculo-matheus-badia.pdf`;
    const link = document.createElement("a");

    link.href = curriculumPath;
    link.download = "Currículo Matheus Badia";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

}
