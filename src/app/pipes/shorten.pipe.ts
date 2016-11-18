import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (typeof (args) === "undefined") {
      return value;
    }

    if (value.length > args) {
      return value.substring(0, args) + "...";
    }
    else {
      return value;
    }
  }

}
