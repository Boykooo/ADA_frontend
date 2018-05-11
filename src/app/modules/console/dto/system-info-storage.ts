import { TimeEventWrapper } from './time-event-wrapper';

export class SystemInfoStorage {
  cpu: TimeEventWrapper<number>[];
  memory: TimeEventWrapper<number>[];
  diskTotalSpace: number;
  diskFreeSpace: number;
}
