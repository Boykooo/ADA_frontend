import { OsmEntityType } from './osm-entity-type';

export class RestoreProcess {

  status: string;
  objectsCounter: Map<OsmEntityType, number>;

  constructor(json: any) {
    this.status = json.status;
    this.objectsCounter = new Map<OsmEntityType, number>();
    Object.keys(json.objectsCounter).forEach(
      (key: string) => {
        this.objectsCounter.set(OsmEntityType[key], json.objectsCounter[key]);
      }
    );

  }

}

