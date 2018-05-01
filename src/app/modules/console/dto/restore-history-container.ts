import { RestoreHistory } from '../domain/restore-history';

export class RestoreHistoryContainer {
  lastRestore: RestoreHistory;
  restores: RestoreHistory[];
  total: number;
}
