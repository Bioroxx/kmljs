import {AbstractGeometryGroup} from './abstract-geometry-group';
import {MultiGeometryType} from './types/multi-geometry-type';
import {AbstractGeometryType} from './types/abstract-geometry-type';

export class MultiGeometry extends AbstractGeometryGroup implements MultiGeometryType {

  geometry: AbstractGeometryType[];

  constructor(multiGeometryType: MultiGeometryType) {
    super(multiGeometryType);

    this.geometry = multiGeometryType.geometry;
  }
}
