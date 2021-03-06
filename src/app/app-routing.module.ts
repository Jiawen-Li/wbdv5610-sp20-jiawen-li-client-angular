import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourseTableComponent} from './course-table/course-table.component';
import {CourseViewerComponent} from './course-viewer/course-viewer.component';
import {QuizzesComponent} from './quizzes/quizzes.component';
import {QuizComponent} from './quiz/quiz.component';


const routes: Routes = [
  {path: 'courses/:courseId/quizzes', component: QuizzesComponent},
  {path: 'courses/:courseId/quizzes/:quizId', component: QuizComponent },
  {path: '', component: CourseTableComponent},
  {path: 'courses', component: CourseTableComponent},
  {path: 'courses/:courseId/modules', component: CourseViewerComponent},
  {path: 'courses/:courseId/modules/:moduleId', component: CourseViewerComponent},
  {path: 'courses/:courseId/modules/:moduleId/lessons', component: CourseViewerComponent},
  {path: 'courses/:courseId/modules/:moduleId/lessons/:lessonId', component: CourseViewerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
