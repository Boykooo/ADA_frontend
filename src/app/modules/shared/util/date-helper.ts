import { DateWrapper } from '../dto/date-wrapper';
import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable()
export class DateHelper {

  private static datePipe: DatePipe = new DatePipe("en-eu");
  private static fullFormat: string = 'yyyy-MM-dd HH:mm:ss';
  private static dateFormat: string = 'yyyy-MM-dd';
  private static timeFormat: string = 'HH:mm:ss';


  public static toReadable(dateWrapper: DateWrapper) {
    return dateWrapper != null ? this.datePipe.transform(dateWrapper.epochSecond * 1000, this.fullFormat) : null;
  }

  public static fromMilis(milis: number) {
    return this.datePipe.transform(milis, this.dateFormat);
  }

  public static toTime(dateWrapper: DateWrapper) {
    return dateWrapper != null ? this.datePipe.transform(dateWrapper.epochSecond * 1000, this.timeFormat) : null;
  }

}
