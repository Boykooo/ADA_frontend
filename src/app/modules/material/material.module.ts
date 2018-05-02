import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule, MatCheckboxModule,
  MatGridListModule,
  MatIconModule,
  MatListModule,
  MatMenuModule, MatPaginatorModule, MatSelectModule,
  MatSidenavModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';

const subModules: any = [
  MatButtonModule,
  MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule,
  MatGridListModule,
  MatListModule,
  MatTableModule,
  MatTabsModule,
  MatSidenavModule,
  MatTableModule,
  MatPaginatorModule,
  MatSelectModule,
  MatCheckboxModule
];

@NgModule({
  exports: [subModules]
})
export class MaterialModule {
}

