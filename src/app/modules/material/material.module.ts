import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatCardModule, MatGridListModule, MatIconModule, MatListModule, MatMenuModule, MatSidenavModule, MatTableModule,
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
  MatSidenavModule
];

@NgModule({
  declarations: [],
  imports: [subModules],
  exports: [subModules]
})
export class MaterialModule {
}
