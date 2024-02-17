import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { ErrorResponseDto } from '../../../../models/error/error-response-dto';

@Component({
  selector: 'app-error-details',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './error-details.component.html',
  styles: ``
})
export class ErrorDetailsComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: ErrorResponseDto) { }
}
