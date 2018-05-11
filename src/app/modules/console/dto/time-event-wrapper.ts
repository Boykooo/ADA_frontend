import { DateWrapper } from '../../shared/dto/date-wrapper';

export class TimeEventWrapper<T> {
  item: T;
  time: DateWrapper;
}
