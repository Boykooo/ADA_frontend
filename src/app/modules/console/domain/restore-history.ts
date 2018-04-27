import { DateWrapper } from '../../shared/dto/date-wrapper';

export class RestoreHistory {
  id: object;
  filename: string;
  filesize: string;
  clearDB: boolean;
  startDate: DateWrapper;
  endDate: DateWrapper;
  executionTime: string;
  restoreStatus: string;
  executorUsername: string;
  dumpDeleted: boolean;
  objectsCounter: Map<string, number>;
}
