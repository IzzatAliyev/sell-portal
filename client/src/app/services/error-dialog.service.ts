import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { ErrorDetailsComponent } from '../pages/error/components/error-details/error-details.component';

@Injectable({
  providedIn: 'root'
})
export class ErrorDialogService {

  public isDialogOpen: Boolean = false;

  constructor(private dialog: MatDialog) { }

  openDialog(data: { message: string, status: string }): any {
    if (this.isDialogOpen) {
      return false;
    }
    this.isDialogOpen = true;
    const dialogRef = this.dialog.open(ErrorDetailsComponent, {
      width: '300px',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.isDialogOpen = false;
    });
  }
}
