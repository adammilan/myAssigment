import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizeFirstPipe'
})
export class CapitalizeFirstPipePipe implements PipeTransform {

  transform(value: string, args?: any): string {
    if (value === null) return 'Not assigned';
    let arr = value.split(' ');
    let newArr = arr.map((d) => this.checkForValidate(d));
    return newArr.map(d => d.charAt(0).toUpperCase() + d.slice(1).toLowerCase()).join(' ');
  }

  checkForValidate(d) {
    let newWord = '';
    for (let i = 0; i < d.length; i++) {
      if (d.charAt(i) == '@' || d.charAt(i) == '!' || d.charAt(i) == '#' || d.charAt(i) == '$' || d.charAt(i) == '%' || d.charAt(i) == '^' || d.charAt(i) == '&' || d.charAt(i) == '*' || d.charAt(i) == ')' || d.charAt(i) == '(' || d.charAt(i) == '?') {
      } else {
        newWord += d.charAt(i);
      }
    }
    return newWord;
  }
}