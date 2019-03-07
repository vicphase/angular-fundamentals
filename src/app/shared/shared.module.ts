import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';

import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { EmptyPipe } from './pipes/empty.pipe';
import { LoadingComponent } from './components/loading/loading.component';

const modules = [
  // Form controls
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  // Navigation
  MatMenuModule,
  MatToolbarModule,
  // Layout
  MatCardModule,
  MatDividerModule,
  MatListModule,
  // Buttons & Indicators
  MatButtonModule,
  MatIconModule,
  MatProgressSpinnerModule,
  // Popups & Modals
  MatDialogModule,
  // CDK
  ScrollingModule
];

/**
 * All the “dumb” components and pipes should be implemented here.
 * These components don’t import and inject services from core or other features in their constructors.
 * They should receive all data though attributes in the template of the component using them.
 * This all sums up to the fact that SharedModule doesn’t have any dependency to the rest of our application.
 */
@NgModule({
  declarations: [EmptyPipe, ConfirmDialogComponent, LoadingComponent],
  imports: [CommonModule, modules],
  exports: [modules, EmptyPipe, LoadingComponent],
  entryComponents: [ConfirmDialogComponent]
})
export class SharedModule {}
