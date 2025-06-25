import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AdmissionExamsComponent } from "./pages/admission-exams/admission-exams.component";
import { NoticesComponent } from "./pages/notices/notices.component";
import { MainPageComponent } from "./pages/main-page/main-page.component";
import { BasicExamsComponent } from "./pages/basic-exams/basic-exams.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AdmissionExamsComponent, NoticesComponent, MainPageComponent, BasicExamsComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Exams';
  admissionExams = '/admission-exams';
  basicExams = '/basic-exams';
  notices = '/notices';
  mainPage=''
}
