export class RestoreHistory {
  id: object;
  filename: string;
  filesize: string;
  clearDB: boolean;
  startDate: any;
  endDate: any;
  executionTime: string;
  restoreStatus: string;
  executorUsername: string;
  dumpDeleted: boolean;
  objectsCounter: Map<string, number>;
}
