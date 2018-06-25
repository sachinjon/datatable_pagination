import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    
    return value.filter(function(val){
      return val.name.toLowerCase().includes(arg.toLowerCase());
    });
  }

}
