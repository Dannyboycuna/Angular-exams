import { Routes } from '@angular/router';
import { BasicExamsComponent } from './pages/basic-exams/basic-exams.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AdmissionExamsComponent } from './pages/admission-exams/admission-exams.component';
import { NoticesComponent } from './pages/notices/notices.component';

export const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'basic-exams', component: BasicExamsComponent },
  { path: 'admission-exams', component: AdmissionExamsComponent },
  {path: 'notices', component: NoticesComponent}
];
