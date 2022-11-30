import {Component, OnInit} from '@angular/core';
import {ControlValueAccessor} from '@angular/forms';

@Component({
  selector: 'app-search-user-field',
  templateUrl: './search-user-field.component.html',
  styleUrls: ['./search-user-field.component.scss']
})
export class SearchUserFieldComponent implements ControlValueAccessor {
  value?: string;

  onChange = (value: string) => {
  };

  onTouched = () => {
  };

  constructor() {
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  writeValue(value: string): void {
    this.value = value;
    this.onChange(value);
  }

}
