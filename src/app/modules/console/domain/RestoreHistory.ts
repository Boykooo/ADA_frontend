export class RestoreHistory {
  id: object;
  filename: string;
  filesize: string;
  clearDB: boolean;
  startDate: Date;
  endDate: Date;
  executionTime: string;
  restoreStatus: string;
  executorUsername: string;
  dumpDeleted: boolean;
  objectsCounter: Map<string, number>;
}







//
// private ObjectId id;
// private String filename;
// private String filesize;
// private boolean clearDb;
// private Instant startDate;
// private Instant endDate;
// private String executionTime;
// private String restoreStatus;
// private String executorUsername;
// private Boolean dumpDeleted;
// private Map<EntityType, Long> objectsCounter;
