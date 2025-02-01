import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-udemy-course-learning-project';

  onLogoClick() {
    alert('You have clicked on the Angular logo!');
  }

  onKeyUp(newTitle: string) {
    this.title = newTitle;
  }
}
