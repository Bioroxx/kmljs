import {AbstractGeometryGroup} from './abstract-geometry-group';
import {MultiGeometryType} from './types/multi-geometry-type';

export class MultiGeometry extends AbstractGeometryGroup implements MultiGeometryType {

  geometry: AbstractGeometryGroup[];

  constructor(multiGeometryType: MultiGeometryType) {
    super(multiGeometryType);

    this.geometry = multiGeometryType.geometry;
  }
}
