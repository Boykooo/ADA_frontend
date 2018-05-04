import { DateWrapper } from '../dto/date-wrapper';
import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable()
export class DateHelper {

  private static datePipe: DatePipe = new DatePipe("en-eu");
  private static fullFormat: string = 'yyyy-MM-dd HH:mm:ss';
  private static dateFormat: string = 'yyyy-MM-dd';


  public static fromDateWrapper(dateWrapper: DateWrapper) {
    return dateWrapper != null ? this.datePipe.transform(dateWrapper.epochSecond * 1000, this.fullFormat) : null;
  }

  public static fromMilis(milis: number) {
    return this.datePipe.transform(milis, this.dateFormat);
  }

}
