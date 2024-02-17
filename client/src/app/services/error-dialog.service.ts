import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { ErrorDetailsComponent } from '../pages/error/components/error-details/error-details.component';

@Injectable({
  providedIn: 'root'
})
export class ErrorDialogService<RESPONSE_DTO> {

  public isDialogOpen: Boolean = false;

  constructor(private dialog: MatDialog) { }

  openDialog(data: RESPONSE_DTO): any {
    if (this.isDialogOpen) {
      return false;
    }
    this.isDialogOpen = true;
    const dialogRef = this.dialog.open(ErrorDetailsComponent, {
      width: '300px',
      data: data,
      enterAnimationDuration: 500,
      exitAnimationDuration: 500
    });

    dialogRef.afterClosed().subscribe(result => {
      this.isDialogOpen = false;
    });
  }
}
