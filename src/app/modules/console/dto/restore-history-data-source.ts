import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { RestoreHistory } from '../domain/restore-history';
import { Observable } from 'rxjs/Observable';

export class RestoreHistoryDataSource extends DataSource<RestoreHistory>{



  connect(collectionViewer: CollectionViewer): Observable<RestoreHistory[]> {
    return undefined;
  }

  disconnect(collectionViewer: CollectionViewer): void {
  }

}
