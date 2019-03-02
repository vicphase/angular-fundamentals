import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { EmptyPipe } from './pipes/empty.pipe';

const modules = [
  // Form controls
  MatFormFieldModule,
  MatInputModule,
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
  // CDK
  ScrollingModule
];

@NgModule({
  declarations: [EmptyPipe],
  imports: [CommonModule, modules],
  exports: [modules, EmptyPipe]
})
export class SharedModule {}
