import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

const components = [
  InputComponent,
  ButtonComponent
]
@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [components]
})
export class ComponentsModule { }
