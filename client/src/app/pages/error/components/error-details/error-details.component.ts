import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-error-details',
  standalone: true,
  imports: [],
  template: `
    <div>
      <div>
        <p>
          Status: {{data.status}}
        </p>
        <p>
          Error: {{data.error}}
        </p>
        <p>
          Message: {{data.message}}
        </p>
      </div>
    </div>
  `,
  styles: ``
})
export class ErrorDetailsComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { status: string, error: string, message: string }) { }
}
