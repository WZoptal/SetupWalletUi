import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'smplToUsd'
})
export class SmplToUsdPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): number {
    return value * 0.0025;
  }

}
