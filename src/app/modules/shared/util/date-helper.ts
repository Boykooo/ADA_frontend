import { DateWrapper } from '../dto/date-wrapper';
import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable()
export class DateHelper {

  private static datePipe: DatePipe = new DatePipe("en-eu");
  private static format: string = 'yyyy-MM-dd HH:mm:ss';

  public static toReadable(dateWrapper: DateWrapper) {
    return dateWrapper != null ? this.datePipe.transform(dateWrapper.epochSecond * 1000, this.format) : null;
  }

}
