import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HighlightDirective } from './directives/highlight.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HighlightDirective],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  title = 'client';
}
