import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input[type]',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => InputComponent),
    }
  ],
})
export class InputComponent implements ControlValueAccessor {

  @Input() type!: string;

  @Input() placeholder: string = '';

  private onChange = (value: string): void => {};

  private onTouched = (): void => {};

  public value: string | undefined;

  public inputChanged(value: string) {
    this.value = value;
    this.onChange(value);
    this.onTouched();
  }

  public writeValue(value: string): void {
    this.value = value;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
