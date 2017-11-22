import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'case'
})
export class CasePipe implements PipeTransform {

  transform(value: string, caseSpec: string): string {
    if (!!caseSpec && caseSpec === 'lower') {
    	return value.toLowerCase();
    }
    return value.toUpperCase();
  }

}
