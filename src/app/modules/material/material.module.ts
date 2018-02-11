import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatGridListModule, MatIconModule, MatMenuModule, MatToolbarModule } from '@angular/material';

const subModules: any = [
  MatButtonModule,
  MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule,
  MatGridListModule
];

@NgModule({
  declarations: [],
  imports: [subModules],
  exports: [subModules]
})
export class MaterialModule {
}
